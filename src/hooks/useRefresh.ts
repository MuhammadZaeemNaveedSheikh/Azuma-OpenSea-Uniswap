import { useContext } from "react";
import { RefreshContext } from "context/RefreshContext";

const useRefresh = () => {
  const { api, fast, slow } = useContext(RefreshContext);
  return { apiRefresh: api, fastRefresh: fast, slowRefresh: slow };
};

export default useRefresh;
