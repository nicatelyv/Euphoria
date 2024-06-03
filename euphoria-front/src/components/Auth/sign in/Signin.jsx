import React, { useState } from 'react'
import signinStyle from "./signin.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";
import axios from "axios"

function Signin() {
  const [inputType, setInputType] = useState('password');
  // Function to toggle input type
  const toggleInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  const { t } = useTranslation();

  const [userData, setUserData] = useState({
    email: "",
    password: "",
  })

  console.log(userData)

  const getUser = async () => {
    try {
      const response = await axios({
        method: "POST",
        url: "https://euphoria-ecommerce.onrender.com/api/user/login",
        data: {
          email: userData.email,
          password: userData.password
        }
      })

      console.log(response);
      setUserData({ email: "", password: "" })
    } catch(err) {
      console.log("There have an error: ", err.message);
    }
  }

  return (
    <div className={signinStyle.signin}>
      <img src="/img/sign-in.jpg" alt="" />
      <div className={signinStyle.container}>

        <h2>{t("Sign In Page")}</h2>
        <button><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />{t("Continue With Google")}</button>
        <button><img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="" />{t("Continue With Twitter")}</button>

        <div className={signinStyle.line}>
          <span></span>
          <p>{t("OR")}</p>
          <span></span>
        </div>

        <div className={signinStyle.input}>
          <p>{t("User name or email address")}</p>
          <input type="text" id='email' value={userData.email} onChange={(e)=> setUserData({...userData, email: e.target.value})} />
        </div>

        <div className={signinStyle.input}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p>{t("Password")}</p>
            {inputType === 'password' ? <p style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }} onClick={toggleInputType}><FaEye /> {t("Show")}</p> : <p style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }} onClick={toggleInputType}><FaEyeSlash /> {t("Hide")}</p>}
          </div>
          <input type={inputType} id='password' value={userData.password} onChange={(e) => setUserData({...userData, password: e.target.value})} />
          <div style={{ width: "100%", textAlign: "end", marginTop: "10px" }}><Link to={"/auth/reset-password"}>{t("Forget your password")}</Link></div>
        </div>

        <div className={signinStyle.end}>
          <button onClick={getUser}>{t("Sign In")}</button>
          <p>{t("Don’t have an account?")} <Link to={"/auth/sign-up"}>{t("Sign up")}</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Signin