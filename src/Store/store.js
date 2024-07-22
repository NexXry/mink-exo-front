import {createStore} from "zustand/vanilla";
import {persist} from "zustand/middleware";

const useAuthStore = createStore(persist(
    (set) => ({
        token: null,
    }),
    {
        name: "auth-storage",
    }
))

export const {getState, setState, subscribe} = useAuthStore;

export default useAuthStore
