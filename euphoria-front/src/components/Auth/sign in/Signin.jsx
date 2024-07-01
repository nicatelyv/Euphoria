import React, { useState } from 'react';
import signinStyle from './signin.module.scss';
import { Link, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import axios from 'axios';
import { useFormik } from 'formik';
import * as Yup from 'yup';

function Signin() {
  const [inputType, setInputType] = useState('password');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const toggleInputType = () => {
    setInputType(inputType === 'password' ? 'text' : 'password');
  };

  const wait = () => {
    let button = document.getElementById('submitbtn');
    button.style.cursor = 'wait';
    document.body.style.cursor = 'wait';
  }

  const defaultCursor = () => {
    let button = document.getElementById('submitbtn');
    button.style.cursor = 'pointer';
    document.body.style.cursor = 'default';
  }

  const validationSchema = Yup.object({
    email: Yup.string().email(t("Invalid email address")).required(t("Please enter your email")),
    password: Yup.string()
      .required(t("Please enter your password")),
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    validationSchema: validationSchema,
    onSubmit: async (values) => {
      try {
        wait()
        setLoading(true);
        setError(null);
        const response = await axios.post('https://euphoria-ecommerce.onrender.com/api/user/login', values);
        localStorage.setItem('access_token', response.data.token);
        navigate('/');
        window.location.reload()
      } catch (err) {
        setLoading(false);
        setError(t('Email or password is incorrect, please try again'));
      } finally {
        setLoading(false);
        defaultCursor()
      }
    },
  });

  const isButtonDisabled = !formik.isValid || formik.isSubmitting;
  const buttonStyle = {
    backgroundColor: isButtonDisabled ? 'gray' : '#8A33FD',
    cursor: isButtonDisabled ? 'not-allowed' : 'pointer',
  };

  return (
    <div className={signinStyle.signin}>
      <img src="/img/sign-in.jpg" alt="" />
      <div className={signinStyle.container}>
        <h2>{t("Sign In Page")}</h2>
        <button>
          <img src="https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png" alt="" />
          {t("Continue With Google")}
        </button>
        <button>
          <img src="https://www.iconpacks.net/icons/2/free-twitter-logo-icon-2429-thumb.png" alt="" />
          {t("Continue With Twitter")}
        </button>
        <div className={signinStyle.line}>
          <span></span>
          <p>{t("OR")}</p>
          <span></span>
        </div>
        <form onSubmit={formik.handleSubmit}>
          <div className={signinStyle.input}>
            <p>{t("Email address")}</p>
            <input
              type="email"
              id="email"
              {...formik.getFieldProps('email')}
            />
            {formik.touched.email && formik.errors.email ? <div style={{ color: 'red', fontSize: "12px" }}>{formik.errors.email}</div> : null}
          </div>
          <div className={signinStyle.input}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
              <p>{t("Password")}</p>
              {inputType === 'password' ? (
                <p style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={toggleInputType}>
                  <FaEye /> {t("Show")}
                </p>
              ) : (
                <p style={{ cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }} onClick={toggleInputType}>
                  <FaEyeSlash /> {t("Hide")}
                </p>
              )}
            </div>
            <input
              type={inputType}
              id="password"
              {...formik.getFieldProps('password')}
            />
            {formik.touched.password && formik.errors.password ? <div style={{ color: 'red', fontSize: "12px" }}>{formik.errors.password}</div> : null}
            <div style={{ width: '100%', textAlign: 'end', marginTop: '10px' }}>
              <Link to="/auth/reset-password">{t("Forget your password")}</Link>
            </div>
          </div>
          <div className={signinStyle.end}>
            <button type="submit" id="submitbtn" style={buttonStyle} disabled={isButtonDisabled}>
              {loading ? t("Logging in") : t("Sign In")}
            </button>
            {error && <div style={{ color: 'red', fontSize: "14px" }}>{error}</div>}
            <p>{t("Don’t have an account?")} <Link to="/auth/sign-up">{t("Sign up")}</Link></p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Signin;