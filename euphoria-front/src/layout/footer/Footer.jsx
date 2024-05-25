import footerStyle from './footer.module.scss'
import footergp from '../../../public/img/footergp.png'
import footeras from '../../../public/img/footeras.png'
import footerfbicon from '../../../public/img/footerfbicon.png'
import footerigicon from '../../../public/img/footerigicon.png'
import footertwicon from '../../../public/img/footertwicon.png'
import footerinicon from '../../../public/img/footerinicon.png'
import footericon from '../../../public/img/footericon.png'
import { useTranslation } from 'react-i18next'

function Footer() {
    const { t } = useTranslation();
    return (
        <div className={footerStyle.footer}>
           <div className={footerStyle.footerInside}>
                <div className={footerStyle.gridColumns}>
                    <h2>{t("Need Help")}</h2>
                    <ul>
                        <li>{t("Contact Us")}</li>
                        <li>{t("Track Order")}</li>
                        <li>{t("Returns & Refunds")}</li>
                        <li>{t("FAQ`s")}</li>
                        <li>{t("Career")}</li>
                    </ul>
                </div>
                <div className={footerStyle.gridColumns}>
                    <h2>{t("Company")}</h2>
                    <ul>
                        <li>{t("About Us")}</li>
                        <li>{t("euphoria Blog")}</li>
                        <li>{t("euphoriastan")}</li>
                        <li>{t("Collaboration")}</li>
                        <li>{t("Media")}</li>
                    </ul>
                </div>
                <div className={footerStyle.gridColumns}>
                    <h2>{t("More Info")}</h2>
                    <ul>
                        <li>{t("Term and Conditions")}</li>
                        <li>{t("Privacy Policy")}</li>
                        <li>{t("Shipping Policy")}</li>
                        <li>{t("Sitemap")}</li>
                    </ul>
                </div>
                <div className={footerStyle.gridColumns}>
                    <h2>{t("Location")}</h2>
                    <ul>
                        <li>support@euphoria.in</li>
                        <li>{t("Eklingpura Chouraha, Ahmedabad Main Road")}</li>
                        <li>{t("(NH 8- Near Mahadev Hotel) Udaipur, India- 313002")}</li>
                    </ul>
                </div>
           </div>
           <div className={footerStyle.socials}>
            <div className={footerStyle.socials1}>
               <img src={footerfbicon} alt="footerfbicon" />
               <img src={footerigicon} alt="footerigicon" />
               <img src={footertwicon} alt="footertwicon" />
               <img src={footerinicon} alt="footerinicon" />
            </div>
            <div className={footerStyle.socials2}>
                <h3>{t("Downlod The App")}</h3>
                <div>
                   <img src={footergp} alt="google play" />
                   <img src={footeras} alt="app store" />
                </div>
            </div>
           </div>
            <div className={footerStyle.categories}>
                <span>{t("Popular Categories")}</span>
                <img src={footericon} alt="footericon" />
            </div>
            <div className={footerStyle.copyright}>
                <p>{t("Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.")}</p>
            </div>
        </div>
    )
}

export default Footer