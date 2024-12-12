const Registration =()=>{

    return(

        <>
        <fieldset>
            <legend>Register now</legend>

            <table>
                <tr> 
                    <td>Enter your FirstName:</td>
                    <td> <input type="text" placeholder="Enter your FirstName"></input></td>
                </tr>

                <tr>
                <td>Enter your LastName</td>
                <td> <input type="text" placeholder="Enter your FirstName"></input></td>
                </tr>

                <tr>
                    <td>Enter your Email</td>
                    <td> <input type="email" placeholder="Enter your email"></input></td>
                </tr>

                <tr>
                    <td></td>
                </tr>

               
            </table>

        </fieldset>

        <a href="/">Return to Login</a>

        </>
    )


}

export default Registration;