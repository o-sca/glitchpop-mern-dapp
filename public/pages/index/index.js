"use strict";

const Web3Modal = window.Web3Modal.default;
const WalletConnectProvider = window.WalletConnectProvider.default;
const Fortmatic = window.Fortmatic;
const evmChains = window.evmChains;

let web3Modal;
let web3;
let provider;
let contractAddress;
let abi;
let selectedWallet;


async function init() {
    // Parses provider keys from ejs
    const infuraKey = $("meta[name=infura]").attr('content');
    const formatic = $("meta[name=formatic]").attr('content');

    // Delcaring the provider options
    const providerOptions = {
        walletconnect: {
            package: WalletConnectProvider,
            options: {
                infuraId: infuraKey,
                qrcode: false
            }
        },
        fortmatic: {
            package: Fortmatic,
            options: {
              key: formatic
            }
        }
    };

    // Initialising the web3 modal
    web3Modal = new Web3Modal({ 
        cacheProvider: false,
        providerOptions,
        disableInjectedProvider: false,
    });

    // Storing contract address and abi
    const contractData = await fetchContract();
    contractAddress = contractData.address;
    abi = contractData.abi;
};

async function refreshWallet() {
    $(".connect-wallet").toggle();
    $(".dc-wallet").toggle();
    await fetchWallet()
};

async function fetchWallet() {
    if (provider === null) return;
    web3 = new Web3(provider);

    const chainId = await web3.eth.getChainId();
    const wallets = await web3.eth.getAccounts();
    
    selectedWallet = wallets[0];

    const balance = await web3.eth.getBalance(selectedWallet);
    const ethBalance = parseFloat(await web3.utils.fromWei(balance, "ether")).toFixed(4);
    
    $(".wallet-info").empty();
    $(".wallet-info").append(`
        <div class="wallet-address">${selectedWallet}</div>
        <div class="wallet-balance">${ethBalance}</div>
    `)
};

async function connect() {
    // console.log("Opening Modal", web3Modal);
    try {
        provider = await web3Modal.connect();
    } catch (e) {
        console.error(e)
    }

    // Subscribe to accounts change
    provider.on("accountsChanged", async () => {
        return fetchWallet();
    });
    
    // Subscribe to chainId change
    provider.on("chainChanged", async (chainId) => {
        // if (chainId !== "0x1") alert("Network must be on the mainnet to mint.");
        return fetchWallet();
    });

    $(".connect-wallet").attr("disabled", "disabled");
    await refreshWallet()
};

async function disconnect() {
    console.log("Disconnecting Wallet", provider);

    if (provider.close) {
        await provider.close();
        await web3Modal.clearCachedProvider();
        provider = null;
    }
    provider = null;
    selectedWallet = null;

    $(".connect-wallet").removeAttr("disabled");
    await refreshWallet();
};    

async function mint() {
    if (provider === undefined || provider === null) return;
    if (await getStatus() === true) return;

    const contract = new web3.eth.Contract(abi, contractAddress);

    const value = await contract.methods.cost().call();
    const mintNum = $("#num-mints").val();
    const priceToMint = mintNum * value;

    let result = await contract.methods.mint(mintNum).send({
        from: selectedWallet,
        value: priceToMint
    })
    if (result.status === false) {
        $(".tx-status").html("Error minting!")
    } else {
        $(".tx-status").html("Sucessfully minted!")
    }    
    return;
};

(async () => {
    await init();
    
    $(".sale-status").html(`${
        await getStatus() === true
        ? "Sale is not live!"
        : "Sale is live!"
    }`);

    $("#connect-wallet").click(async e => {
        e.preventDefault();
        await connect();
    });

    $("#dc-wallet").click(async e => {
        e.preventDefault();
        await disconnect()
    });

    $("#mint-btn").click(async e => {
        e.preventDefault();
        await mint();
    });
})();