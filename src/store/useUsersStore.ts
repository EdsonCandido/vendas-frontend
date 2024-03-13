import {create} from 'zustand';
import http from '../services/http';

type IUser = {
    id: number;
    name: string;
    login: string;
    is_admin: number;
}
type IUserStore = {
    user: IUser | null;
    loading: boolean;
    setLoading: (data: boolean) => void;
    setUser: (data: IUser) => void;
    login: (login: string, password: string) => Promise<void>;
}

const userUsersStore = create<IUserStore>((set) => {
    return {
        user: null,
        loading: false,
        setLoading: (data: boolean) => set({loading: data}),
        setUser: (data: IUser) => set({user: data}),
        login: async (login: string, password: string) => {
            const response = await http.post(`/session/`, {login, password});
            if(response.status == 200){
                set({user: response.data});
            }else{
                set({user: null});
            }
        }
    }
});

export default userUsersStore;