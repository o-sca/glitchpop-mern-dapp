import Web3 from 'web3';
import { web3Modal } from "./Web3Modal";
import { toggleConnectButton } from "../buttons/ConnectButton.handler";

let web3;
let provider;
let selectedWallet;

export async function connect() {
  if (!window.ethereum) return alert("No metamask extension detected!")
  try {
    provider = await web3Modal.connect();
    provider.on("accountsChanged", async () => {
      return fetchWallet();
    })
  
    provider.on("chainChanged", async (chainId) => {
      // if (chainId !== "0x1") alert("Network must be on the mainnet to mint.");
      console.log(chainId)
      window.location.reload();
      return fetchWallet();
    });
  } catch (e) {
    console.error(e)
    return false;
  }
  return toggleConnectButton();
};

export async function disconnect() {
  if (provider.close) {
    await provider.close();
    web3Modal.clearCachedProvider();
    provider = null;
  }
  web3Modal.clearCachedProvider();
  provider = null;
  selectedWallet = null;
  return true;
};

export async function fetchWallet() {
  if (provider === null) return;
    web3 = new Web3(provider);

    const wallets = await web3.eth.getAccounts();
    
    selectedWallet = wallets[0];

    const balance = await web3.eth.getBalance(selectedWallet);
    const ethBalance = parseFloat(web3.utils.fromWei(balance, "ether")).toFixed(4);
    console.log(selectedWallet, ethBalance)
  };

export async function mintEvent(account, contractData) {
  // + 1 is added into the selected index as it starts at 0
  const numOfMints = document.querySelector("#mint-select").selectedIndex + 1;  
  
};

export const fetchWalletInfo = () => {
  return {
    web3: web3,
    provider: provider,
    wallet: selectedWallet
  }
}; 

