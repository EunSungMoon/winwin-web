import { atomWithReset, useHydrateAtoms } from "jotai/utils";

export const accessTokenAtom = atomWithReset(undefined)
export const isLoadingAtom = atomWithReset(false)
export const isLoggedInAtom = atomWithReset(false)

export function init(initialData) {
  const hydrateTargets = []
  if (initialData) {
    const { accessToken } = initialData
    if (accessToken) {
      hydrateTargets.push([accessTokenAtom, accessToken])
    }
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useHydrateAtoms(hydrateTargets)
  }
  return hydrateTargets
}