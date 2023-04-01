import { createSlice,PayloadAction } from "@reduxjs/toolkit";
import { ICategory } from "models/ICategory";


interface CategoriesState {
    categories:ICategory[];
    isLoading: boolean;
    error:string;
}

const initialState: CategoriesState = {
    categories: [],
    isLoading: false,
    error: ''
}

export const categorySlice = createSlice({
    name:'category',
    initialState,
    reducers:{
        categoriesFetching(state){
            state.isLoading = true;
        },
        categoriesFetchingSucces(state, action: PayloadAction<ICategory[]>){
            state.isLoading = false;
            state.categories = action.payload
        },
        categoriesFetchingError(state, action: PayloadAction<string>){
            state.isLoading = false;
            state.error = action.payload
        },
        addCategoryFetchingSuccess(state, action: PayloadAction<ICategory>){
            state.isLoading = false;
            state.categories.push(action.payload)
        }
    }
})

export default categorySlice.reducer