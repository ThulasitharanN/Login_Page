import React from 'react';
import './loginpage.css';
import user_icon from '../Assets/profile.png';
import email_icon from '../Assets/email.png';
import password_icon from '../Assets/hide.png';

const Loginpage = ()=>
{
    return(
        <div className="container">
        <div className="header">
        <div className="text">Signup</div>
        <div className="underline"></div>
        </div>  

           <div className="inputs">

           <div className="input">
              <img src={user_icon}/>
              <input type="text" placeholder='Name'></input>
           </div>
           <div className="input">
              <img src={email_icon}/>
              <input type="Email" placeholder='Email'></input>
           </div>
           <div className="input">
              <img src={password_icon}/>
              <input type="Password" placeholder='Password'></input>
           </div>
            
            <div className="forget-password">Forget Password:<span>Click here</span></div>
              <div className="submit-container">
                <button className='submit'>Signup</button>
                <button className='submit'>Login</button>
              </div>
           </div>  


        </div>

    )
}
export default Loginpage;