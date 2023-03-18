import { Routes, Route, Navigate } from "react-router-dom";
import HomePage from "../pages/home";
import Header from "../components/modules/header";

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<Header/>}>
                <Route
                    index
                    element={<HomePage />} />
                </Route>
        </Routes>
    );
}
export default AppRoutes