import { useEffect } from "react";

function useSyncSsr(datas = [], initialData = {}) {
  useEffect(() => {
    datas.forEach((d) => {
      const [data, setter] = d;
      if (initialData[data]) {
        setter(initialData[data]);
      }
    });
  }, [initialData]);
}

export default useSyncSsr;
