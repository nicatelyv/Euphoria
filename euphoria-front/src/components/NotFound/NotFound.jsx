import React from 'react'
import notfoundstyle from './notfound.module.scss'
import HomeNavbar from '../../layout/navbar/HomeNavbar'
import Footer from '../../layout/footer/Footer'
import notfoundimg from '/img/NotFound/notfoundimg.png'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div className={notfoundstyle.notfound}>
        <HomeNavbar />
        <div className={notfoundstyle.notfoundmain}>
        <img src={notfoundimg} alt="404 not found" />
        <div className={notfoundstyle.notfoundtext}>
         <h1>Oops! Page not found</h1>
         <p style={{color:"#807D7E"}}>The page you are looking for might have been removed or temporarily unavailable.</p>
         <Link to="/">
         <button style={{background: "#8A33FD",border: "none",
         color: "white", padding: "13px 30px", fontSize:"17px",
         borderRadius:"8px", marginTop: "15px", cursor: "pointer"
         }}>Back to HomePage</button>
         </Link>
        </div>
        </div>
        <Footer />
    </div>
  )
}

export default NotFound