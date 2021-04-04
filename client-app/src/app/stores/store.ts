import { createContext, useContext } from "react";
import ActivityStore from "./activityStore";

interface Store {
  activityStore: ActivityStore;
}

export const store: Store = {
  activityStore: new ActivityStore(),
};

export const storeContext = createContext(store);

//Hook to use our store in component

export function useStore() {
  return useContext(storeContext);
}
