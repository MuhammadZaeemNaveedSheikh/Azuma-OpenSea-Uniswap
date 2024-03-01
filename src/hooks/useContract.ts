import { useWeb3React } from "@web3-react/core";
import { useMemo } from "react";
import {
  getMulticallContract,
  getNFTContract,
} from "utils/contractHelpers";
import useWeb3 from "./useWeb3";

const networkId = Number(process.env.REACT_APP_NETWORK_ID);

export const useMulticall = () => {
  const web3 = useWeb3();
  const { chainId } = useWeb3React();
  return useMemo(() => getMulticallContract(web3, chainId || networkId), [web3, chainId]);
};

export const useNFTContract = () => {
  const web3 = useWeb3();
  const { chainId } = useWeb3React();
  return useMemo(() => getNFTContract(web3, chainId || networkId), [web3, chainId]);
};
