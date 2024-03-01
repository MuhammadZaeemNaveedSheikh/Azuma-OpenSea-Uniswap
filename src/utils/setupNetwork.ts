export const setupNetwork = async () => {
  const provider = (window as WindowChain).ethereum;
  if (provider) {
    const chainId = parseInt(process.env.REACT_APP_NETWORK_ID, 10);
    try {
      await provider.request({
        method: "wallet_switchEthereumChain",
        params: [{ ...NetworksData[chainId] }],
      });
      return true;
    } catch (error) {
      console.error(error);
      return false;
    }
  } else {
    console.error("Can't setup the Mainnet network on metamask because window.ethereum is undefined");
    return false;
  }
};

const NetworksData = {
  4: {
    chainId: "0x4",
  },
  592: {
    chainId: "0x250",
  },
};
