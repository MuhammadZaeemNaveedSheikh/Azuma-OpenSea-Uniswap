import { useCallback } from "react";
import { Interface } from "@ethersproject/abi";
import { useMulticall } from "./useContract";

const useMulticallCallback = (abi, calls) => {
  const multi = useMulticall();

  const handleMulticall = useCallback(async () => {
    const itf = new Interface(abi);
    const calldata = calls.map(call => [call.address.toLowerCase(), itf.encodeFunctionData(call.name, call.params)]);
    const { returnData } = await multi.methods.aggregate(calldata).call();
    const res = returnData.map((call, i) => itf.decodeFunctionResult(calls[i].name, call));

    return res;
  }, [multi, calls, abi]);

  return handleMulticall;
};

export default useMulticallCallback;
