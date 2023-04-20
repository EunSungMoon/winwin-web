import { useAtom } from "jotai";

import useHydrating from "../useHydrating";
import useSyncSsr from "../useSyncSsr";

import * as Fetch from "./fetch";

import { storesAtom, requestedWorkersAtom } from "./strore";

const useStore = (initialData) => {
  useHydrating(
    [
      ["stores", storesAtom],
      ["requestedWorkers", requestedWorkersAtom],
    ],
    initialData
  );
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);

  const [stores, setStores] = useAtom(storesAtom);
  const [requestedWorkers, setRequestedWorkers] = useAtom(requestedWorkersAtom);

  useSyncSsr(
    [
      ["stores", setStores],
      ["requestedWorkers", setRequestedWorkers],
    ],
    initialData
  );

  const findStores = async (data) => {
    try {
      setIsLoading(true);
      const res = await Fetch.findStores();
      setStores(res.items);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const findRequestedWorkers = async (data) => {
    try {
      setIsLoading(true);
      const res = await Fetch.findRequestedWorkers();
      setRequestedWorkers(res.items);
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const deleteStore = async (params) => {
    try {
      setIsLoading(true);
      const res = await Fetch.deleteStore(params);
      //TODO:
    } catch (err) {
    } finally {
      setIsLoading(false);
    }
  };

  return {
    findStores,
    findRequestedWorkers,
    readableAtom: {
      isLoading,
      stores,
      requestedWorkers,
    },
  };
};
