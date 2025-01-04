import React from "react";
import { Routes, Route } from "react-router-dom";
import AuthLayout from "./components/ui/auth/layout.jsx";  
import AuthLogin from "./pages/auth/login.jsx";  // Correct path to AuthLogin
import AuthRegister from "./pages/auth/register.jsx";  // Correct path to AuthRegister
import AdminLayout from "./components/admin-view/layout.jsx";
import AdminDashboard from "./pages/admin-view/dashboard.jsx";
import UserLayout from "./components/user-view/layout.jsx";
import NotFound from "./pages/not-found/index.jsx";
import UserHome from "./pages/user-view/home.jsx";
import UserAccount from "./pages/user-view/account.jsx";
import UserTransaction from "./pages/user-view/transaction.jsx";
//import CheckAuth from "./components/common/check-auth.jsx";
import UnauthPage from "./pages/unauth-page/index.jsx";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";




function App() {
  const { user, isAuthenticated, isLoading } = useSelector(
    (state) => state.auth
  );
  const dispatch = useDispatch();

  useEffect (()=>{

  }, [dispatch])


 

  console.log(isLoading, user);


  return (
    <div className="flex flex-col overflow-hidden bg-white">
      
      <Routes>
        <Route path="/auth" element= {
          
          <AuthLayout />
          
        }>
          <Route path="login" element= {<AuthLogin />}/>
          <Route path="register" element= {<AuthRegister />}/>
        </Route>
        <Route path="/admin" element = {
          
          <AdminLayout  />
          
          }>
           <Route path="dashboard" element = {<AdminDashboard />}/>
        </Route>
        <Route path="/user" element = {
          
           <UserLayout />
          
          }>
          <Route  path="home" element= {<UserHome />}/>
          <Route  path="account" element= {<UserAccount />}/>
          <Route  path="transaction" element= {<UserTransaction />}/>
        </Route>
        
        <Route path="/unauth-page" element = {<UnauthPage/>}/>
        <Route path="*" element = {<NotFound/>}/>
        
      </Routes>
    </div>
  )
}
export default App
