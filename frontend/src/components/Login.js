import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Login = ({category}) => {

    const navigate= useNavigate()

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");

    const handleLogin= (event) => {
        event.preventDefault()
        const config = {
            headers: { username: username, password: password}
          };
          const route= category+"/get-"+category
        axios.get('http://localhost:3005/'+route, config).then(response=> {
            console.log("hello: ",response)
            if(response.data.length>0){
                alert("Login Successful!")
                navigate("/"+category+"/dashboard", {replace: true, state: response.data[0]})
            }
            else{
                alert('Login Failed. Please use correct username and password')
            }
        }).catch(error=> {
            alert('Login Failed. Please use correct username and password')
            console.log("hello failure")
        })
    }

    return (
        <div class="card-body">
        <form onSubmit={handleLogin}>
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="username" class="col-form-label">Username</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="username" class="form-control" aria-labelledby="usernameHelpInline" onChange={(txt)=> setUsername(txt.target.value)}/>
                </div>
                <div class="col-auto">
                    <span id="usernameHelpInline" class="form-text">
                        We'll never share your email with anyone else.
                    </span>
                </div>
            </div>  
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Password</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline" onChange= {(txt)=> setPassword(txt.target.value)}/>
                </div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
            </div>
            <button type="submit" class="btn btn-primary authButton">Submit</button>
            <button class="btn btn-primary authButton" onClick= {e=> window.location.reload()}>Cancel</button>
        </form>
    </div>
    )
}

export default Login