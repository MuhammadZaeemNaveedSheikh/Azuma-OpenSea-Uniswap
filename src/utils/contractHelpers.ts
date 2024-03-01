import { getWeb3NoAccount } from "./web3";
import multicallAbi from "config/abis/Multicall.json";
import nftAbi from "../config/abis/NFT.json";
import contracts from "config/constants/contracts";

const getContract = (abi, address, web3) => {
  const _web3 = web3 ?? getWeb3NoAccount();
  return new _web3.eth.Contract(abi, address);
};

export const getMulticallContract = (web3, chainId) => {
  return getContract(multicallAbi, contracts.multicall[chainId], web3);
};

export const getNFTContract = (web3, chainId) => {
  return getContract(nftAbi, contracts.nft[chainId], web3);
};
