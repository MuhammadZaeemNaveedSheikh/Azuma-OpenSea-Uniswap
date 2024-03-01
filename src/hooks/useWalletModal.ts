import { useContext } from "react";
import { WalletModalContext } from "context/WalletModalContext";

const useWalletModal = () => {
  const { open, setOpen } = useContext(WalletModalContext);
  return { open, setOpen };
};

export default useWalletModal;
