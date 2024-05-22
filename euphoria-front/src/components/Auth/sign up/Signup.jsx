import React, { useState } from "react";
import signupStyle from "./signup.module.css";
import { useFormik } from "formik";
import * as Yup from "yup";
import { useTranslation } from 'react-i18next';
import { Link } from "react-router-dom"

const Signup = () => {
    const [inputType, setInputType] = useState('password');
    const toggleInputType = () => {
        setInputType(inputType === 'password' ? 'text' : 'password');
    };
    const { t } = useTranslation();
    const initialValues = {
        email: '',
        password: ""
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string()
            // .email(`${t("Error message")}`)
            .required(`${t("Please enter your email")}`),
        password: Yup.string()
            .min(8, t("Password must be at least 8 characters long"))
            .matches(
                /^(?=.*[a-zA-Z])(?=.*\d)/,
                t("Password must contain at least one letter and one number")
            )
            .required(t("Please enter your password"))
    })

    const formik = useFormik({
        initialValues,
        onSubmit: (value) => console.log(value),
        validationSchema
    });

    return (
        <div className={signupStyle.signup}>
            <img src="/img/sign-up.jpg" className={signupStyle.signupImg} alt="Euphoria" />

            <div className={signupStyle.container}>

                <div className={signupStyle.signupText}>
                    <h2>{t("Sign Up Page")}</h2>
                    <span>{t("Sign up for free to access to in any of our products ")}</span>
                </div>
                <button style={{ marginTop: "30px" }}><img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />{t("Continue With Google")}</button>
                <button ><img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="" />{t("Continue With Twitter")}</button>

                <form onSubmit={formik.handleSubmit} >

                    <div className={signupStyle.email}>
                        <p>{t("Email address")}</p>
                        <input type="email" name="email" placeholder="designer@gmail.com" onChange={formik.handleChange} /><br />
                        {formik.errors.email && <div className={signupStyle.error}>{formik.errors.email}</div>}
                    </div>

                    <div className={signupStyle.password}>
                        <div className={signupStyle.passwordText}>
                            <p>{t("Password")}</p>
                            {inputType === 'password' ?
                                <p style={{ cursor: "pointer" }} onClick={toggleInputType}>
                                    <i className="fa-regular fa-eye"></i> {t("Show")}</p> :
                                <p style={{ cursor: "pointer" }} onClick={toggleInputType}>
                                    <i className="fa-regular fa-eye-slash"></i> {t("Hide")}</p>
                            }
                        </div>
                        <input type={inputType} name="password" onChange={formik.handleChange} /> <br />

                        {formik.errors.password && <div className={signupStyle.error}>{formik.errors.password}</div>}

                    </div>

                    <div className={signupStyle.check}>
                        <div className={signupStyle.flex}><input type="checkbox" required /><span>{t("Agree to our Terms of use and Privacy Policy")}</span> <br /></div>
                        <div className={signupStyle.flex}><input type="checkbox" required /><span>{t("Subscribe to our monthly newsletter")}</span></div>
                    </div>


                    <div className={signupStyle.submit}>
                        <button>{t("Sign Up")}</button>
                        <span>{t("Already have an account?")} <Link style={{ textDecoration: "underline" }} to={"/auth/sign-in"}>{t("Log in")}</Link></span>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Signup;
