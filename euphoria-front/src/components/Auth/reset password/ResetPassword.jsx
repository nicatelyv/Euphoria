import resetPasswordStyle from './resetpassword.module.scss'
import respassimg from '../../../../public/img/respassimg.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'
import { axiosFunction } from '../../../api'
import { useState } from 'react'
import axios from 'axios'

const ResetPassword = () => {
 const { t } = useTranslation();

 const [userEmail, setUserEmail] = useState({email: ""});
 console.log(userEmail);
 const [emailVerifiedMessage, setEmailVerifiedMessage] = useState(false);
 const [isEmailVerified, setIsEmailVerified] = useState(false);
 const [otp, setOtp] = useState(0);
 console.log(otp);
 const [userPassword, setUserPassword] = useState({password: ""});
 console.log(userPassword);
 const [userConfirmPassword, setUserConfirmPassword] = useState({confirmPassword: ""});
 console.log(userConfirmPassword);

 const verifyEmail = async () => {
  try {
    const response = await axiosFunction("POST", "/user/verify-email", { email: userEmail.email });
    console.log(response);
    if(response){
      setEmailVerifiedMessage(true);
    }
    setUserEmail({ email: "" });
  } catch (error) {
    console.log("There has an error:", error.message);
  }
};

console.log(emailVerifiedMessage);

 const verifyOtp = async () => {
  try {
    const response = await axiosFunction("POST", "/user/verify-otp", {email: userEmail.email, otp: otp});
    console.log(response);
    if(response){
      setIsEmailVerified(true);
    }
    setOtp(0);
  } catch (error) {
    console.log("There has an error:", error.message);
  }
 }


 const changePassword = async () => {
  try {
    const response = await axiosFunction("POST", "/user/change-password/{email}", {email: userEmail.email, password: userPassword.password, confirmPassword: userConfirmPassword.confirmPassword});
    console.log(response);
  } catch (error) {
    console.log("There has an error:", error.message);
  }
 }

 return (
    <div className={resetPasswordStyle.resetPassword}>
        <img src={respassimg} alt="resetpswimg" />
        <div className={resetPasswordStyle.resetPasswordContainer}>
         <div className={resetPasswordStyle.rpcInside}>
           <h2>{t("Reset Your Password")}</h2>
           <p className={resetPasswordStyle.p1}>{t("Enter your email and we`ll send you a link to reset your password.")}</p>
           <p className={resetPasswordStyle.p2}>{t("Please check it.")}</p>

           {!emailVerifiedMessage && (
            <>
            <div>
                <p>{t("Email")}</p>
                <input type="email" value={userEmail.email} onChange={(e)=> setUserEmail({...userEmail, email: e.target.value})} />
            </div>
            <button onClick={verifyEmail}>{t("Send")}</button>
            </>
            )}

            {emailVerifiedMessage && !isEmailVerified &&(
            <>
            <p>{t("OTP")}</p>
              <input
                type="number"
                value={otp}
                onChange={(e) => setOtp(e.target.value)}
              />
              <button onClick={verifyOtp}>{t("Verify OTP")}</button>
            </>
            )}

            {isEmailVerified &&  (
            <>
            <p>{t("New Password")}</p>
            <input
              type="password"
              value={userPassword}
              onChange={(e) => setUserPassword(e.target.value)}
            />
            <p>{t("Confirm Password")}</p>
            <input
              type="password"
              value={userConfirmPassword}
              onChange={(e) => setUserConfirmPassword(e.target.value)}
            />
            <button onClick={changePassword}>{t("Reset Password")}</button>
            </>
            )}

            <p className={resetPasswordStyle.p3}>{t("Back to")} <Link to='/auth/sign-in'>{t("Login")}</Link></p>
         </div>
        </div>
    </div>
  )
}

export default ResetPassword

//*sual: change password requesti dogrudurmu(umumiyyetle hamisi?)