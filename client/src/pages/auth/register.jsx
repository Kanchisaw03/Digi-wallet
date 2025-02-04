import CommonForm from "@/components/common/form";
import axios from "axios";


import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice/index.js";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  

  function onSubmit(event) {
  dispatch(registerUser(formData)).then((data) => {
        navigate("/user/home");
        
      })

      axios
       .post("http://localhost:5001/api/signup", user) // Updated port
       .then((res) => {
       alert("Signup successful");
       setName("");
       setEmail("");
       setPassword("");
       setErrorMessage("");
      })
      
  }

  console.log(formData);

  return (
    <div className="mx-auto w-full max-w-md space-y-6">
      <div className="text-center">
        <h1 className="text-3xl font-bold tracking-tight text-foreground">
          Create new account
        </h1>
        <p className="mt-2">
          Already have an account
          <Link
            className="font-medium ml-2 text-primary hover:underline"
            to="/login"
          >
            Login
          </Link>
        </p>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Sign Up"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
    </div>
  );
}

export default AuthRegister;
