import { createStore } from 'zustand/vanilla'
import { User, UserColumnDef } from '../schema/user';
export type UserState = {
    users: User[]
}
export type UserActions = {
    updateUsers: (users: User[]) => void;
    removeUsers: () => void;
    removeUser: (id: string) => void;
}
export type UserStore = UserState & UserActions;
export const defaultInitialState: UserState = {
    users: []
}
export const createUserStore = (initialState: UserState = defaultInitialState) => {
    return createStore<UserStore>()((set) => ({
        ...initialState,
        updateUsers: (users: User[]) => set({ users }),
        removeUsers: () => set({ users: [] }),
        removeUser: (id: string) => set((state: { users: any[]; }) => ({
            users: state.users.filter((user) => user.id!== id)}
        )),
    }))
}
