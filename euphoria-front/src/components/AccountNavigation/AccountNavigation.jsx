import React, { useState } from "react";
import style from "./style.module.scss";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { RxHamburgerMenu } from "react-icons/rx";

function AccountNavigation() {
  const currentUser = { name: "User" };
  const { t } = useTranslation();
  const location = useLocation();
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate()

  return (
    <div className={style.accountNav}>
      <div className={style.url}>
        <Link to={"/"}>
          {t("Home")} <img src="/img/arrow.png" alt="" />
        </Link>
        <Link to={"/my-account"}>
          {t("My Account")} <img src="/img/arrow.png" alt="" />
        </Link>
        {location.pathname === "/my-account/my-orders" ? (
          <p>My Orders</p>
        ) : (
          <></>
        )}
        {location.pathname === "/my-account/my-orders/order-details" ? (
          <p>Order Details</p>
        ) : (
          <></>
        )}

        {location.pathname === "/my-account/wishlist" ? <p>Wishlist</p> : <></>}
        {location.pathname === "/my-account/personal-info" ? (
          <p>Personal Info</p>
        ) : (
          <></>
        )}
        {location.pathname === "/my-account/sign-out" ? <p>Sign out</p> : <></>}
      </div>

      {/* Tablet */}
      <RxHamburgerMenu
        className={style.menuIcon}
        onClick={() => setMenu(!menu)}
      />
      <div className={`${style.menuInActive} ${menu ? style.menuActive : ""}`}>
        <RxHamburgerMenu
          className={style.menuIcon}
          onClick={() => setMenu(!menu)}
        />
        <div className={style.navContainer}>
          <h2>
            <div></div> {t("Hello")} {currentUser.name}
          </h2>
          <p>{t("Welcome to your Account")}</p>
          <ul className={style.accountNavLinks}>
            {localStorage.getItem("access_token") && <NavLink
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
              to={"/my-account/my-orders"}
              onClick={() => setMenu(!menu)}
            >
              <img src="/img/AccountNav/orders.png" alt="" /> {t("My Orders")}
            </NavLink>}
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
              to={"/my-account/wishlist"}
              onClick={() => setMenu(!menu)}
            >
              <img src="/img/AccountNav/heart.png" alt="" /> {t("Wishlist")}
            </NavLink>
            {localStorage.getItem("access_token") && <NavLink
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
              to={"/my-account/personal-info"}
              onClick={() => setMenu(!menu)}
            >
              <img src="/img/AccountNav/user.png" alt="" /> {t("My info")}
            </NavLink>}
            {localStorage.getItem("access_token") &&
              <p
                className={style.navLink}
                style={{ cursor: "pointer" }}
                onClick={(e) => {
                  e.preventDefault()
                  setMenu(!menu)
                  const userConfirmed = window.confirm("Are you sure you want to log out?");
                  if (userConfirmed) {
                    localStorage.removeItem("access_token");
                    navigate("/");
                  } else {
                    navigate("/my-account/personal-info");
                  }
                }}
              >
                <img src="/img/AccountNav/logout.png" alt="" /> {t("Sign out")}
              </p>}
          </ul>
        </div>
      </div>

      {/* PC */}
      <div className={style.navContainer}>
        <h2>
          <div></div> {t("Hello")} {currentUser.name}
        </h2>
        <p>{t("Welcome to your Account")}</p>
        <ul className={style.accountNavLinks}>
          {localStorage.getItem("access_token") && <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.active}` : style.navLink
            }
            to={"/my-account/my-orders"}
          >
            <img src="/img/AccountNav/orders.png" alt="" /> {t("My Orders")}
          </NavLink>}
          <NavLink
            className={({ isActive }) =>
              isActive ? `${style.navLink} ${style.active}` : style.navLink
            }
            to={"/my-account/wishlist"}
          >
            <img src="/img/AccountNav/heart.png" alt="" /> {t("Wishlist")}
          </NavLink>
          {localStorage.getItem("access_token") &&
            <NavLink
              className={({ isActive }) =>
                isActive ? `${style.navLink} ${style.active}` : style.navLink
              }
              to={"/my-account/personal-info"}
            >
              <img src="/img/AccountNav/user.png" alt="" /> {t("My info")}
            </NavLink>}
          {localStorage.getItem("access_token") &&
            <p
              className={style.navLink}
              style={{ cursor: "pointer" }}
              onClick={(e) => {
                e.preventDefault()
                const userConfirmed = window.confirm("Are you sure you want to log out?");
                if (userConfirmed) {
                  localStorage.removeItem("access_token");
                  navigate("/");
                  window.location.reload()
                } else {
                  navigate("/my-account/personal-info");
                }
              }}
            >
              <img src="/img/AccountNav/logout.png" alt="" /> {t("Sign out")}
            </p>}
        </ul>
      </div>
    </div>
  );
}

export default AccountNavigation;
