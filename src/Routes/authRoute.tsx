import { useAppSelector } from "hooks/redux"
import { Navigate, PathRouteProps, Route, RouteProps } from "react-router"
import React, {FC, PropsWithChildren} from "react"
import { IsAuthentificted } from "services/utils/isAuthentificated"
interface AuthRouteProps {
    children?:React.ReactNode
}
const AuthRoute:FC<AuthRouteProps> = ({children}) => {
    if(IsAuthentificted()) return <Navigate to="/" replace/>
    return <>{children}</>
}
export default AuthRoute