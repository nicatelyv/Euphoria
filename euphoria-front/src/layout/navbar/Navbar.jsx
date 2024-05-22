import React from 'react'
import style from "./navbar.module.scss"
import heart from "../../../public/img/heart.png"
import basket from "../../../public/img/basket.png"
import user from "../../../public/img/user.png"
import Languageoption from "../../components/language dropdown/language-dropdown"
import { useTranslation } from 'react-i18next';
import i18next from 'i18next';
import { Link, NavLink } from "react-router-dom"
import "./global.scss";

function Navbar() {
    const { t } = useTranslation();
    const handleClick = (e) => {
        i18next.changeLanguage(e.target.value)
    }

    return (
        <div className={style.nav}>
            <NavLink to={'/'}><img src="/svg/logo.svg" /></NavLink>
            <ul className={style.listLeft}>
                <NavLink to={"/"}>Shop</NavLink>
                <NavLink to={"/shop/category=men"}>Men</NavLink>
                <NavLink to={"/shop/category=women"}>Women</NavLink>
                <NavLink to={"/shop/category=combos"}>Combos</NavLink>
                <NavLink to={"/shop/category=joggers"}>Joggers</NavLink>
            </ul>
            <div className={style.input}>
                <i class="fa-solid fa-magnifying-glass"></i>
                <input type="text" placeholder={t("Search")} />
            </div>
            <ul className={style.listRight}>
                <Languageoption onChange={e => handleClick(e)} />
                <Link><div className={style.icon}><img src={heart} alt="" /></div></Link>
                <Link><div className={style.icon}><img src={user} alt="" /></div></Link>
                <Link><div className={style.icon}><img src={basket} alt="" /></div></Link>
            </ul>
        </div>
    )
}

export default Navbar