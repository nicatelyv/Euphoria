import React, { useState } from 'react'
import signinStyle from "./signin.module.scss"
import { Link } from "react-router-dom"
import { useTranslation } from 'react-i18next';
import { FaEye } from "react-icons/fa";
import { FaEyeSlash } from "react-icons/fa";

function Signin() {
  const [inputType, setInputType] = useState('password');
  // Function to toggle input type
  const toggleInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };
  const { t } = useTranslation();

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
          <input type="text" />
        </div>

        <div className={signinStyle.input}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <p>{t("Password")}</p>
            {inputType === 'password' ? <p style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }} onClick={toggleInputType}><FaEye /> {t("Show")}</p> : <p style={{ cursor: "pointer", display: "flex", alignItems: "center", gap: "5px" }} onClick={toggleInputType}><FaEyeSlash /> {t("Hide")}</p>}
          </div>
          <input type={inputType} />
          <div style={{ width: "100%", textAlign: "end", marginTop: "10px" }}><Link to={"/auth/reset-password"}>{t("Forget your password")}</Link></div>
        </div>

        <div className={signinStyle.end}>
          <button>{t("Sign In")}</button>
          <p>{t("Don’t have an account?")} <Link to={"/auth/sign-up"}>{t("Sign up")}</Link> </p>
        </div>
      </div>
    </div>
  )
}

export default Signin