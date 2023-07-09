import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Registration = ({category}) => {

    const navigate= useNavigate()

    const [username, setUsername]= useState("");
    const [password, setPassword]= useState("");
    const [repassword, setRepassword]= useState("");
    const [name, setName]= useState("")
    const [address, setAddress]= useState("")

    const handleRegistration= (event) => {
        event.preventDefault()
        if(repassword!==password) {
            alert('Retype the password correctly')
            setRepassword("")
        }
        else {
            const userDetails= {
                "name": name,
                "address": address,
                "username": username,
                "password": password
            }
            const route= category+"/add-"+category
            axios.post('http://localhost:3005/'+route, userDetails).then(response=> {
                console.log("hello: ",response)
                alert("Regitration done Successfully")
                window.location.reload()
            }).catch(error=> {
                console.log("Registration Failed. Please try again.")
            })
        }
        
    }

    return (
        <div class="card-body">
        <form onSubmit={handleRegistration}>
        <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="username" class="col-form-label">Name</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="username" class="form-control" aria-labelledby="usernameHelpInline" onChange={(txt)=> setName(txt.target.value)}/>
                </div>
                <div class="col-auto">
                    <span id="usernameHelpInline" class="form-text">
                        We'll never share your email with anyone else.
                    </span>
                </div>
            </div> 
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
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="inputPassword6" class="col-form-label">Retype Password</label>
                </div>
                <div class="col-auto">
                    <input type="password" id="inputPassword6" class="form-control" aria-labelledby="passwordHelpInline" onChange= {(txt)=> setRepassword(txt.target.value)} value={repassword}/>
                </div>
                <div class="col-auto">
                    <span id="passwordHelpInline" class="form-text">
                        Must be 8-20 characters long.
                    </span>
                </div>
            </div>
            {category==='manufacturer'?
            <div class="row g-3 align-items-center">
                <div class="col-auto">
                    <label for="username" class="col-form-label">Address</label>
                </div>
                <div class="col-auto">
                    <input type="text" id="username" class="form-control" aria-labelledby="usernameHelpInline" onChange={(txt)=> setAddress(txt.target.value)}/>
                </div>
                <div class="col-auto">
                    <span id="usernameHelpInline" class="form-text">
                        We'll never share your email with anyone else.
                    </span>
                </div>
            </div>:null}  
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
    )
}

export default Registration