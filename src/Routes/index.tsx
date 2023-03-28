import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import Header from "../layouts/header";
import Menu from "../pages/menu";
import SignUp from "../pages/signUp";
import SignIn from "../pages/signIn";
import AuthRoute from "./authRoute";

const AppRoutes = () => {

    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route
                    index
                    element={<HomePage />} />
                <Route path="/menu/" element={<Menu/>}>
                    <Route index path="/menu/:categoryId" element={<Menu/>}/>
                </Route>
                <Route path="sign-up" element={<AuthRoute><SignUp/></AuthRoute>}></Route>
                <Route path="sign-in" element={<AuthRoute><SignIn/></AuthRoute>}/>
                <Route path="*" element={<div>404 not found</div>}/>
            </Route>
        </Routes>
    );
}
export default AppRoutes