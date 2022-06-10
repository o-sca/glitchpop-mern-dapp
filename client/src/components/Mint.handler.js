import { ethers } from "ethers";

export function increase(e) {
  e.preventDefault();
  if (document.querySelector("#mint-select").selectedIndex === 2) return;
  document.querySelector("#mint-select").selectedIndex++;
};

export function decrease(e) {
  e.preventDefault();
  if (document.querySelector("#mint-select").selectedIndex === 0) return;
  document.querySelector("#mint-select").selectedIndex--;
};

export const checkWalletisConnected = async () => {
  if (!window.ethereum) return alert("No metamask extension detected!")
  const provider = new ethers.providers.Web3Provider(window.ethereum)
  const accounts = await provider.send("eth_requestAccounts", []);
  const signer = provider.getSigner();
  return {
    account: accounts[0],
    signer: signer
  }
};

export function mintEvent(currentAccount) {
  // + 1 is added into the selected index as it starts at 0
  const numOfMints = document.querySelector("#mint-select").selectedIndex + 1;
  
};