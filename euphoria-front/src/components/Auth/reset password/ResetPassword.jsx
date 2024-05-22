import resetPasswordStyle from './resetpassword.module.scss'
import respassimg from '../../../../public/img/respassimg.png'
import { Link } from 'react-router-dom'
import { useTranslation } from 'react-i18next'

const ResetPassword = () => {
 const { t } = useTranslation();
 console.log(t);
  return (
    <div className={resetPasswordStyle.resetPassword}>
        <img src={respassimg} alt="resetpswimg" />
        <div className={resetPasswordStyle.resetPasswordContainer}>
         <div className={resetPasswordStyle.rpcInside}>
           <h2>{t("Reset Your Password")}</h2>
           <p className={resetPasswordStyle.p1}>{t("Enter your email and we`ll send you a link to reset your password.")}</p>
           <p className={resetPasswordStyle.p2}>{t("Please check it.")}</p>
            <div>
                <p>{t("Email")}</p>
                <input type="text" />
            </div>
            <button>{t("Send")}</button>
            <p className={resetPasswordStyle.p3}>{t("Back to")} <Link to='/auth/sign-in'>{t("Login")}</Link></p>
         </div>
        </div>
    </div>
  )
}

export default ResetPassword