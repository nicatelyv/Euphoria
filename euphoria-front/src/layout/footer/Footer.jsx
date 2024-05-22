import footerStyle from './footer.module.scss'
import footergp from '../../../public/img/footergp.png'
import footeras from '../../../public/img/footeras.png'
import footerfbicon from '../../../public/img/footerfbicon.png'
import footerigicon from '../../../public/img/footerigicon.png'
import footertwicon from '../../../public/img/footertwicon.png'
import footerinicon from '../../../public/img/footerinicon.png'
import footericon from '../../../public/img/footericon.png'

function Footer() {
    return (
        <div className={footerStyle.footer}>
           <div className={footerStyle.footerInside}>
                <div className={footerStyle.gridColumns}>
                    <h2>Need Help</h2>
                    <ul>
                        <li>Contact Us</li>
                        <li>Track Order</li>
                        <li>Returns & Refunds</li>
                        <li>FAQ`s</li>
                        <li>Career</li>
                    </ul>
                </div>
                <div className={footerStyle.gridColumns}>
                    <h2>Company</h2>
                    <ul>
                        <li>About Us</li>
                        <li>euphoria Blog</li>
                        <li>euphoriastan</li>
                        <li>Collaboration</li>
                        <li>Media</li>
                    </ul>
                </div>
                <div className={footerStyle.gridColumns}>
                    <h2>More Info</h2>
                    <ul>
                        <li>Term and Conditions</li>
                        <li>Privacy Policy</li>
                        <li>Shipping Policy</li>
                        <li>Sitemap</li>
                    </ul>
                </div>
                <div className={footerStyle.gridColumns}>
                    <h2>Location</h2>
                    <ul>
                        <li>support@euphoria.in</li>
                        <li>Eklingpura Chouraha, Ahmedabad Main Road</li>
                        <li>(NH 8- Near Mahadev Hotel) Udaipur, India- 313002</li>
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
                <h3>Downlod The App</h3>
                <div>
                   <img src={footergp} alt="google play" />
                   <img src={footeras} alt="app store" />
                </div>
            </div>
           </div>
            <div className={footerStyle.categories}>
                <span>Popular Categories</span>
                <img src={footericon} alt="footericon" />
            </div>
            <div className={footerStyle.copyright}>
                <p>Copyright © 2023 Euphoria Folks Pvt Ltd. All rights reserved.</p>
            </div>
        </div>
    )
}

export default Footer