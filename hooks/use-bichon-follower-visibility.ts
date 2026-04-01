import { useAtom } from "jotai";
import { atomWithStorage } from "jotai/utils";

const bichonFollowerVisibilityAtom = atomWithStorage<boolean>(
  "bichon-follower-visible",
  true,
);

export function useBichonFollowerVisibility() {
  return useAtom(bichonFollowerVisibilityAtom);
}
