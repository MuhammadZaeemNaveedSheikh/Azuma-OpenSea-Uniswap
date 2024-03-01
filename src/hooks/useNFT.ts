import { useEffect, useState, useMemo, useCallback } from "react";
import { useWeb3React } from "@web3-react/core";
import BigNumber from "bignumber.js";
import useRefresh from "./useRefresh";
import useMulticallCallback from "./useMulticall";
import { useNFTContract } from "./useContract";
import useWeb3 from "./useWeb3";
import nftAbi from "config/abis/NFT.json";
import contracts from "config/constants/contracts";

const netId = Number(process.env.REACT_APP_NETWORK_ID);

export const useNFTData = (forceUpdate?) => {
  const [ethBalance, setEthBalance] = useState(new BigNumber(0));
  const [saleIsActive, setSaleIsActive] = useState(false);
  const [mintPrice, setMintPrice] = useState(new BigNumber(0));
  const [maxToMint, setMaxToMint] = useState(15);
  const [totalSupply, setTotalSupply] = useState(0);

  const web3 = useWeb3();
  const { fastRefresh } = useRefresh();
  const { chainId, account } = useWeb3React();
  const networkId = chainId || netId;

  const calls = useMemo(() => {
    return [
      { address: contracts.nft[networkId], name: "saleIsActive", params: [] },
      { address: contracts.nft[networkId], name: "mintPrice", params: [] },
      { address: contracts.nft[networkId], name: "maxToMint", params: [] },
      { address: contracts.nft[networkId], name: "totalSupply", params: [] },
    ];
  }, [networkId]);

  const multicall = useMulticallCallback(nftAbi, calls);

  useEffect(() => {
    const fetchGlobalData = async () => {
      try {
        if (account) {
          const balance = new BigNumber(await web3.eth.getBalance(account));
          setEthBalance(balance);
        } else {
          setEthBalance(new BigNumber(0));
        }

        const data = await multicall();
        setSaleIsActive(data[0][0]);
        setMintPrice(new BigNumber(data[1][0].toString()));
        setMaxToMint(data[2][0].toString());
        setTotalSupply(data[3][0].toString());
      } catch (e) {
        console.error("Fetching nft data had error", e);
      }
    };

    fetchGlobalData();
  }, [web3, fastRefresh, forceUpdate, multicall, account]);

  return {
    ethBalance,
    saleIsActive,
    mintPrice,
    maxToMint,
    totalSupply,
  };
};

export const useMintCallback = () => {
  const [pending, setPending] = useState(false);
  const { account } = useWeb3React();
  const contract = useNFTContract();
  const { mintPrice } = useNFTData();

  const handleMint = useCallback(
    async (quantity) => {
      try {
        setPending(true);
        const tx = await contract.methods.mint(quantity).send({
          from: account,
          value: mintPrice.times(quantity).toString(10),
        });
        setPending(false);
        return tx;
      } catch (e) {
        console.error("NFT mint had error :>> ", e);
        setPending(false);
        return false;
      }
    },
    [account, contract, mintPrice]
  );

  return { handleMint, pending };
};
