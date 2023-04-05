import { useHydrateAtoms } from "jotai/utils";

function useHydrating(datas = [], initialData = {}) {
  const hydrateTargets = [];
  datas.forEach((d) => {
    const [data, atom] = d;
    if (initialData[data]) {
      hydrateTargets.push([atom, initialData[data]]);
    }
  });
  if (hydrateTargets.length > 0) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useHydrateAtoms(hydrateTargets);
  }
}

export default useHydrating;
