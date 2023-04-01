import { AppDispatch } from "store";
import api from 'services/api'
import { categorySlice } from "./CategorySlice";
import { ICategory } from "models/ICategory";

export const fetchCategories = () => async (dispatch: AppDispatch) =>{
    try {
        dispatch(categorySlice.actions.categoriesFetching())
        const {data: categories} = await api.categories.getCategories()
        dispatch(categorySlice.actions.categoriesFetchingSucces(categories))
    } catch (error) {
        dispatch(categorySlice.actions.categoriesFetchingError((error as Error).message))
    }
}

export const postCategory = (name:string, image?:File) => async (dispatch: AppDispatch) =>{
    try {
        dispatch(categorySlice.actions.categoriesFetching())
        const {data:category} = await api.categories.postCategories(name, image)
        dispatch(categorySlice.actions.addCategoryFetchingSuccess(category))
        
    } catch (error) {
        dispatch(categorySlice.actions.categoriesFetchingError((error as Error).message))
    }
}