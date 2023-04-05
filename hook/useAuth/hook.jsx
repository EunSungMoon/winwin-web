import { useAtom } from "jotai";

import useHydrating from "../useHydrating";
import useSyncSsr from "../useSyncSsr";

import * as Fetch from "./fetch";

import { isLoadingAtom, accessTokenAtom, isLoggedInAtom } from "./store";

const useAuth = (initialData) => {
  useHydrating(
    [
      ["accessToken", accessTokenAtom],
      ["isLoggedIn", isLoggedInAtom],
    ],
    initialData
  );
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);

  useSyncSsr(
    [
      ["accessToken", setAccessToken],
      ["isLoggedIn", setIsLoggedIn],
    ],
    initialData
  );

  const login = async (data) => {
    try {
      setIsLoading(true);
      const fetchRes = await Fetch.login(data);
      sessionStorage.setItem("accessToken", fetchRes.data.message);
      setAccessToken(fetchRes.data.message);
      setIsLoggedIn(true);
      window.location='/'

    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const logout = async (data) => {
    sessionStorage.removeItem("accessToken");
    window.location = "/auth/login";
  };

  return {
    login,
    logout,
    readableAtom: {
      isLoggedIn,
      accessToken,
      isLoading,
    },
  };
};

export default useAuth;
