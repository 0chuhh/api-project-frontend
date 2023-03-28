import { AppDispatch } from "../..";
import { IUser } from "../../../models/IUser";
import api from '../../../services/api'
import { IsAuthentificted } from "../../../services/utils/isAuthentificated";
import { userSlice } from "./UserSlice";
export const loginUser = (username:string, password:string) => async (dispatch: AppDispatch) => {
    try {
        dispatch(userSlice.actions.userFetching())
        const user:IUser = await api.auth.getAuthToken(username, password)
        dispatch(userSlice.actions.userFetchingSuccess(user))
    } catch (error) {
        dispatch(userSlice.actions.userFetchingError((error as Error).message))
        
    }
}

export const getMe = () => async (dispatch:AppDispatch) => {
    try {
        if(IsAuthentificted()){
            dispatch(userSlice.actions.userFetching())
            const user:IUser = await api.auth.getMe()
            dispatch(userSlice.actions.userFetchingSuccess(user))
        }else{
            throw Error
        }
    } catch (error) {
        dispatch(userSlice.actions.userFetchingError('error.message'))
    }
}