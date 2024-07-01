import React from 'react'
import personalInfoStyle from './PersonalInfo.module.scss'

const PersonalInfo = () => {
  return (
    <div className={personalInfoStyle.perIncontainer}>
        
        <h2 style={{marginBottom: "15px"}}>My Info</h2>
        <h3>Contact Details</h3>

        <form>
          <label htmlFor="perInfname">Your Name</label> 
        <div>
          <input type="text" id="perInfname" value="Jvanhi Shah" />
          Change
        </div>

        <label htmlFor="perInfemail">Email Address</label> 
        <div>
          <input type="email" id="perInfemail" value="Jhanvi@gmail.com" />
          Change
        </div>

        <label htmlFor="perInfphone">Phone Number</label> 
        <div>
          <input type="tel" id="perInfphone" value="8980252445" />
          Change
        </div>

        <label htmlFor="perInfpassword">Password</label> 
        <div>
          <input type="password" id="perInfpassword" value="8980252445" />
          Change
        </div>
        </form>

        <div className={personalInfoStyle.addressadding}>
        <div className={personalInfoStyle.addressaddingheader}>
         <span>Address</span>
         <span>Add New</span>
        </div>
        <div className={personalInfoStyle.addressaddingboxes}>
         <div>
            <p style={{fontWeight:"600"}}>Jhanvi shah</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>8980252445</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
            <div className={personalInfoStyle.adresboxbtn}>
              <button style={{backgroundColor:"transparent",padding:"7px 15px",border:"1px solid #807D7E",borderRadius:"8px",marginRight:"13px",color:"#807D7E"}}>Home</button>
              <button style={{backgroundColor:"transparent",padding:"7px 15px",border:"1px solid #807D7E",borderRadius:"8px",color:"#807D7E"}}>Default billing address</button>
            </div>
            <div>
              <span style={{fontSize: "15px",fontWeight:"600"}}>Remove</span> | <span style={{fontSize: "15px",fontWeight:"600"}}>Edit</span>
            </div>
         </div>
         <div>
         <p style={{fontWeight:"600"}}>Jhanvi shah</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>8980252445</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
            <div className={personalInfoStyle.adresboxbtn}>
              <button style={{backgroundColor:"transparent",padding:"7px 15px",border:"1px solid #807D7E",borderRadius:"8px",marginRight:"13px",color:"#807D7E"}}>Home</button>
              <button style={{backgroundColor:"transparent",padding:"7px 15px",border:"1px solid #807D7E",borderRadius:"8px",color:"#807D7E"}}>Default billing address</button>
            </div>
            <div>
              <span style={{fontSize: "15px",fontWeight:"600"}}>Remove</span> | <span style={{fontSize: "15px",fontWeight:"600"}}>Edit</span>
            </div>
         </div>
         <div>
         <p style={{fontWeight:"600"}}>Jhanvi shah</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>8980252445</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
            <div className={personalInfoStyle.adresbox2btn}>
              <button style={{backgroundColor:"transparent",padding:"7px 15px",border:"1px solid #807D7E",borderRadius:"8px",color:"#807D7E"}}>Office</button>
            </div>
            <div>
              <span style={{fontSize: "15px",fontWeight:"600"}}>Remove</span> | <span style={{fontSize: "15px",fontWeight:"600"}}>Edit</span> | <span style={{fontSize: "15px",fontWeight:"600"}}>Set as default</span>
            </div>
         </div>
         <div>
         <p style={{fontWeight:"600"}}>Jhanvi shah</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>8980252445</p>
            <p style={{color:"#807D7E",fontSize:"15px"}}>1/4 Pragatinagar Flats, opp. jain derasar , near Jain derasar, Vijaynagar road</p>
            <div className={personalInfoStyle.adresbox2}>
              <button style={{backgroundColor:"transparent",padding:"7px 15px",border:"1px solid #807D7E",borderRadius:"8px",color:"#807D7E"}}>Home2</button>
            </div>
            <div>
              <span style={{fontSize: "15px",fontWeight:"600"}}>Remove</span> | <span style={{fontSize: "15px",fontWeight:"600"}}>Edit</span> | <span style={{fontSize: "15px",fontWeight:"600"}}>Set as default</span>
            </div>
         </div>
        </div>
        </div>
    </div>
  )
}

export default PersonalInfo