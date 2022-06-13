import Web3 from "web3";
import { web3Modal } from "./Web3Modal";
import { fetchContract } from "../web3/Contract.handler";
import {
  pendingStatus,
  successStatus,
  errorStatus,
  resetStatus,
  toggleConnectButton,
} from "../buttons";

let web3;
let provider;
let selectedWallet;

export async function connect() {
  if (!window.ethereum) return console.error("No metamask extension detected!");
  try {
    provider = await web3Modal.connect();
    provider.on("accountsChanged", async () => {
      return fetchWallet();
    });

    provider.on("chainChanged", async (chainId) => {
      // if (chainId !== "0x1") alert("Network must be on the mainnet to mint.");
      window.location.reload();
      return fetchWallet();
    });
  } catch (e) {
    console.error(e);
    return;
  }
  await fetchWallet();
  return toggleConnectButton();
}

export async function disconnect() {
  if (provider.close) {
    await provider.close();
    web3Modal.clearCachedProvider();
    provider = null;
  }

  web3Modal.clearCachedProvider();
  provider = null;
  selectedWallet = null;

  console.log(fetchWalletInfo());
  return toggleConnectButton();
}

export async function fetchWallet() {
  if (provider === null) return;
  web3 = new Web3(provider);

  const wallets = await web3.eth.getAccounts();

  selectedWallet = wallets[0];

  // const balance = await web3.eth.getBalance(selectedWallet);
  // const ethBalance = parseFloat(web3.utils.fromWei(balance, "ether")).toFixed(4);
  return;
}

export async function mintEvent() {
  if (provider === null || provider === undefined || provider === "") return;

  pendingStatus();

  const contractData = await fetchContract();
  const contract = new web3.eth.Contract(
    contractData.abi,
    contractData.address
  );

  const valueInWei = await contract.methods.cost().call();
  const numOfMints = document.querySelector("#mint-select").selectedIndex + 1;
  const costToMint = valueInWei * numOfMints;

  try {
    let tx = await contract.methods.mint(numOfMints).send({
      from: selectedWallet,
      value: costToMint,
    });

    if (tx.status === false) return errorStatus();
    else return successStatus();
  } catch (e) {
    // console.log(e)
    return resetStatus();
  }
}

export const fetchWalletInfo = () => {
  return {
    web3: web3,
    provider: provider,
    wallet: selectedWallet,
  };
};
