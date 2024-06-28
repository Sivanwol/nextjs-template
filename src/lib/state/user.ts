import { createStore } from 'zustand/vanilla'
import { User, UserColumnDef, UserResponse } from '../schema/user';
export type UserState = {
    users: User[]
    profile: UserResponse | null;
}
export type UserActions = {
    updateUsers: (users: User[]) => void;
    removeUsers: () => void;
    removeUser: (id: string) => void;
    setProfile: (user: UserResponse) => void;
    removeProfile: () => void;
}
export type UserStore = UserState & UserActions;
export const defaultInitialState: UserState = {
    users: [],
    profile: null,
}
export const createUserStore = (initialState: UserState = defaultInitialState) => {
    return createStore<UserStore>()((set) => ({
        ...initialState,
        updateUsers: (users: User[]) => set({ users }),
        removeUsers: () => set({ users: [] }),
        removeUser: (id: string) => set((state: { users: any[]; }) => ({
            users: state.users.filter((user) => user.id!== id)}
        )),
        setProfile: (user: UserResponse) => set({ profile: user }),
        removeProfile: () => set({ profile: null }),
    }))
}
