import Web3Modal from "web3modal";
import WalletConnectProvider from "@walletconnect/web3-provider";
import Fortmatic from 'fortmatic';

// Delcaring the provider options
const providerOptions = {
  walletconnect: {
      package: WalletConnectProvider,
      options: {
          infuraId: "c1365aa0f2634a00872d4137a4214853",
          qrcode: false
      }
  },
  fortmatic: {
      package: "pk_test_12A7B09BFEE8F8E9",
      options: {
        key: Fortmatic
      }
  }
};

export const web3Modal = new Web3Modal({ 
  cacheProvider: false,
  providerOptions,
  disableInjectedProvider: false,
});