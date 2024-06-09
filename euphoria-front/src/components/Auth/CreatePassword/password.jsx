import React, { useState } from 'react';
import girlsPng from '../../../../public/img/createpassword.png'
import styles from './createpassword.module.scss';

const Password = () => {
  const [password, setPassword] = useState("");
  const [alertMessage, setAlertMessage] = useState(""); 
  // const [confirmParol, setConfirmParol] = useState(""); 
  
  const handlePass = (event) => {
    const newPassword = event.target.value;
    setPassword(newPassword);
    if (newPassword.length > 8) {
      setAlertMessage('Password must be at least 8 characters.');
    } else {
      setAlertMessage(""); 
    }
  };

  const handleConfirm=(event)=>{
    const setConfirmParol = event.target.value;
    if(setConfirmParol.length === newPassword){
     
    }
  }
  return (
    <>
      <div className={styles.password_container}>
        <div className={styles.left_side}>
          <img src={girlsPng} alt='girls' />
        </div>

        <div className={styles.right_side}>
          <h1>Create New Password</h1>
          <p>Your new password must be different from previously used passwords.</p>
          <form>
            <div className={styles.password}>
              <label style={{fontSize: "24px"}}>Password</label>
              <input
                className={styles.pass_input}
                type='password'
                onInput={handlePass}
              />
              {alertMessage && <p style={{color: "red" }} >{alertMessage}</p>}
            </div>
            <div className={styles.confirm_password}>
              <label style={{fontSize: "24px"}}>Confirm Password</label>
              <input className={styles.pass_input} type='password'
              onInput={handleConfirm}
              />
               
            </div>
            <button className={styles.reset_password} type="submit">Reset Password</button> 
          </form>
        </div>
      </div>
    </>
  );
}

export default Password;