import { useState } from "react"

import Login from "./Login"
import Registration from "./Registration"

const UserForm = ({category}) => {
    const [registration, setRegistration]= useState(false)

    console.log('form loaded')
    return (
        <div class="card text-center">
             <div class="card-header">
                <ul class="nav nav-tabs card-header-tabs">
                    <li>
                        <a class= "nav-item nav-link active">{category}</a>
                    </li>
                    <li>
                        <a class=" nav-item nav-link" data-toggle="tab"  role="tab" aria-current="true" href="#" onClick={(e)=>setRegistration(false)}>Login</a>
                    </li>
                    <li>
                        <a class="nav-item nav-link" data-toggle="tab" role="tab" href="/Registration" >Register</a>
                    </li>
                </ul>
            </div>
            {registration===true?<Registration category= {category}/>:<Login category= {category}/>}
        </div>
    )
}

export default UserForm