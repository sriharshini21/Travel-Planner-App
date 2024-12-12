import { useState } from "react";
import { useRef } from "react";

const Login = () =>{

    const ref1 = useRef(null);
    const ref2 = useRef(null);
    

    return(
        <>
          <fieldset>
            <legend>Login Form</legend>
            <input type="text" ref={ref1} placeholder="enter username"></input>
            <br></br><br></br>
            <input type="password" ref= {ref2} placeholder="enter password"></input>
            <br></br><br></br>
            <button>Login</button>
        </fieldset>

        <a href="/register">Register Now</a>
        
        </>
    )

}

export default Login;