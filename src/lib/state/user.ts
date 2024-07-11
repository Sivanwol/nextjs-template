import { createStore } from "zustand/vanilla";
import { User, UserColumnDef, UserResponse } from "../requests/user";
export type UserState = {
  users: User[];
  history: UserResponse[];
  profile: UserResponse | null;
};
export type UserActions = {
  updateUsers: (users: User[]) => void;
  removeUsers: () => void;
  removeUser: (id: string) => void;
  updateUsersHistory: (history: UserResponse[]) => void;
  clearUsersHistory: () => void;
  setProfile: (user: UserResponse) => void;
  removeProfile: () => void;
};
export type UserStore = UserState & UserActions;
export const defaultInitialState: UserState = {
  users: [],
  history: [],
  profile: null,
};
export const createUserStore = (
  initialState: UserState = defaultInitialState,
) => {
  return createStore<UserStore>()((set) => ({
    ...initialState,
    updateUsers: (users: User[]) => set({ users }),
    removeUsers: () => set({ users: [] }),
    removeUser: (id: string) =>
      set((state: { users: any[] }) => ({
        users: state.users.filter((user) => user.id !== id),
      })),
    updateUsersHistory: (history: UserResponse[]) => set({ history }),
    clearUsersHistory: () => set({ history: [] }),
    setProfile: (user: UserResponse) => set({ profile: user }),
    removeProfile: () => set({ profile: null }),
  }));
};
