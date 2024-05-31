import React from "react";
import navStyle from "./navbar.module.scss";
import Languageoption from "../../components/language dropdown/language-dropdown";
import { useTranslation } from "react-i18next";
import i18next from "i18next";
import { NavLink } from "react-router-dom";
import "./global.scss";
import { FaMagnifyingGlass } from "react-icons/fa6";

function AuthNavbar() {
  const { t } = useTranslation();
  const handleClick = (e) => {
    i18next.changeLanguage(e.target.value);
  };

  return (
    <nav>
      <NavLink to={"/"}>
        <img src="/svg/logo.svg" />
      </NavLink>
      <div className={navStyle.input}>
        <FaMagnifyingGlass style={{ color: "gray" }} />
        <input type="text" placeholder={t("Search")} />
      </div>
      <ul className={navStyle.list}>
        <Languageoption onChange={(e) => handleClick(e)} />
        <NavLink to={"/auth/sign-in"}>{t("Login")}</NavLink>
        <NavLink to={"/auth/sign-up"}>{t("Sign Up")}</NavLink>
      </ul>
    </nav>
  );
}

export default AuthNavbar;
