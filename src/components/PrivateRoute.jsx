import { Outlet, Navigate } from "react-router-dom"

 const PrivateRoute = ({user}) => {
    
    return user.username ? <Outlet/> : <Navigate to="../login"/>
  
   
}
export default PrivateRoute;