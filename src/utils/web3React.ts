import { InjectedConnector } from "@web3-react/injected-connector";
import { WalletConnectConnector } from "@web3-react/walletconnect-connector";
import Web3 from "web3";
import getNodeUrl from "./getRpcUrl";

// const POLLING_INTERVAL = 12000;
const rpcUrl = getNodeUrl();
const chainId = parseInt(process.env.REACT_APP_NETWORK_ID, 10);

const injected = new InjectedConnector({ supportedChainIds: [chainId] });

const walletconnect = new WalletConnectConnector({
  rpc: { [chainId]: rpcUrl },
  bridge: "https://bridge.walletconnect.org",
  qrcode: true,
  // pollingInterval: POLLING_INTERVAL,
});

export const ConnectorNames = {
  Injected: "MetaMask",
  WalletConnect: "walletconnect",
};

export const connectorLocalStorageKey = "connectorId";

export const connectorsByName = {
  [ConnectorNames.Injected]: injected,
  [ConnectorNames.WalletConnect]: walletconnect,
};

export const getLibrary = (provider): Web3 => {
  return provider;
};
