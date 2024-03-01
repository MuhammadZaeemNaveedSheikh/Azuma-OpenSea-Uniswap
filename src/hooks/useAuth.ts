import { useCallback } from "react";
import { useWeb3React, UnsupportedChainIdError } from "@web3-react/core";
import { NoEthereumProviderError, UserRejectedRequestError as UserRejectedRequestErrorInjected } from "@web3-react/injected-connector";
import {
  UserRejectedRequestError as UserRejectedRequestErrorWalletConnect,
  WalletConnectConnector,
} from "@web3-react/walletconnect-connector";
import { NotificationManager } from "react-notifications";
import { connectorLocalStorageKey } from "utils/web3React";
import { connectorsByName } from "utils/web3React";
import { setupNetwork } from "utils/setupNetwork";

const useAuth = () => {
  const { activate, deactivate } = useWeb3React();

  const login = useCallback(connectorID => {
    const connector = connectorsByName[connectorID];
    if (connector) {
      window.localStorage.setItem(connectorLocalStorageKey, connectorID);
      activate(connector, async (error: Error) => {
        if (error instanceof UnsupportedChainIdError) {
          const hasSetup = await setupNetwork();
          if (hasSetup) {
            activate(connector);
          }
        } else {
          window.localStorage.removeItem(connectorLocalStorageKey);
          if (error instanceof NoEthereumProviderError) {
            NotificationManager.warning("Provider Error", "No provider was found");
          } else if (error instanceof UserRejectedRequestErrorInjected || error instanceof UserRejectedRequestErrorWalletConnect) {
            if (connector instanceof WalletConnectConnector) {
              const walletConnector = connector as WalletConnectConnector;
              walletConnector.walletConnectProvider = null;
            }
            NotificationManager.warning("Authorization Error", "Please authorize to access your account");
          } else {
            NotificationManager.warning(error.name, error.message);
          }
        }
      });
    } else {
      NotificationManager.warning("Can't find connector", "The connector config is wrong");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return { login, logout: deactivate };
};

export default useAuth;
