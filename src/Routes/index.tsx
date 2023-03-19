import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import Header from "../layouts/header";
import Menu from "../pages/menu";

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

            </Route>
        </Routes>
    );
}
export default AppRoutes