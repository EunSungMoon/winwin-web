import { useAtom } from "jotai";

import useHydrating from "../useHydrating";
import useSyncSsr from "../useSyncSsr";

import * as Fetch from "./fetch";

import {
  isLoadingAtom,
  accessTokenAtom,
  isLoggedInAtom,
  checkedEmailAtom,
} from "./store";

const useAuth = (initialData) => {
  useHydrating(
    [
      ["accessToken", accessTokenAtom],
      ["isLoggedIn", isLoggedInAtom],
      ["checkedEmail", checkedEmailAtom],
    ],
    initialData
  );
  const [isLoading, setIsLoading] = useAtom(isLoadingAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [isLoggedIn, setIsLoggedIn] = useAtom(isLoggedInAtom);
  const [checkedEmail, setCheckedEmail] = useAtom(checkedEmailAtom);

  useSyncSsr(
    [
      ["accessToken", setAccessToken],
      ["isLoggedIn", setIsLoggedIn],
      ["checkedEmail", setCheckedEmail],
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
      window.location = "/";
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const join = async (data) => {
    try {
      setIsLoading(true);
      const fetchRes = await Fetch.join(data);
      return fetchRes;
    } catch (err) {
      throw err;
    } finally {
      setIsLoading(false);
    }
  };

  const checkUsername = async (data) => {
    try {
      setIsLoading(true);
      const fetchRes = await Fetch.checkUsername(data);
      if (fetchRes.data.code === 10001) {
        setCheckedEmail(true);
      } else {
        setCheckedEmail(false);
      }
      // return fetchRes;
      console.log(fetchRes);
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
    join,
    checkUsername,
    readableAtom: {
      isLoggedIn,
      accessToken,
      isLoading,
      checkedEmail,
    },
  };
};

export default useAuth;
