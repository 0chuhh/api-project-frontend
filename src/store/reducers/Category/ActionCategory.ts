import { AppDispatch } from "store";
import api from 'services/api'
import { categorySlice } from "./CategorySlice";

export const fetchCategories = () => async (dispatch: AppDispatch) =>{
    try {
        dispatch(categorySlice.actions.categoriesFetching())
        const {data: categories} = await api.categories.getCategories()
        dispatch(categorySlice.actions.categoriesFetchingSucces(categories))
    } catch (error) {
        dispatch(categorySlice.actions.categoriesFetchingError((error as Error).message))
    }
}