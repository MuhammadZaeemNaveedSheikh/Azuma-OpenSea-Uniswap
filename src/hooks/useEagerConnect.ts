import { useEffect } from "react";
import { connectorLocalStorageKey } from "utils/web3React";
import useAuth from "hooks/useAuth";

const useEagerConnect = () => {
  const { login } = useAuth();

  useEffect(() => {
    const connectorId = window.localStorage.getItem(connectorLocalStorageKey);
    // const connectorId = "MetaMask";

    // Disable eager connect for Avalanche Wallet. Currently the Avalanche Wallet extension does not inject BinanceChain
    // into the Window object in time causing it to throw an error
    // TODO: Figure out an elegant way to listen for when the BinanceChain object is ready
    if (connectorId) {
      login(connectorId);
    }
  }, [login]);
};

export default useEagerConnect;
