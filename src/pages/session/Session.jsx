import {  } from "react-router-dom"
import { LoginFormComponent } from "./components/LoginFormComponent"
import { RegisterFormComponent } from "./components/RegisterFormComponent"
import { useState } from "react"

export const Session = () => {
  const [typeForm, setTypeForm] = useState("Login");
  return (
    <>
      <h1>LOGIN | REGISTER</h1>
      <button onClick={() => {setTypeForm('login')}}>LOGIN</button>
      <button onClick={() => {setTypeForm('signup')}}>REGISTER</button>
      {typeForm === 'login' ? <LoginFormComponent /> : <RegisterFormComponent/>}
    </>
  )
}
