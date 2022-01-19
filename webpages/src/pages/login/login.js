import React, {useState} from "react"
import "./login.css"
import axios from "axios"
import { useHistory } from "react-router-dom"

const Login = ({ setLoginUser}) => {

    const history = useHistory()

    const [ user, setUser] = useState({
        email:"",
        password:""
    })

    const handleChange = e => {
        const { name, value } = e.target
        setUser({
            ...user,[name]: value
        })
    }

    const login = () => {
        axios.post("http://localhost:9002/login", user)
        .then(res => {
            alert(res.data.message)
            //setLoginUser(res.data.user)
            history.push("/")

        })
    }
    
    return (
        <h1 style={{
            display: 'flex',
            justifyContent: 'Center',
            alignItems: 'Center',
            height: '100vh'
          }} >
        <div
            className="login">
            <h2>Login</h2>
            <input type="text" name="email" value={user.email} onChange={handleChange} placeholder="username@gmail.com" ></input>
            <input type="password" name="password" value={user.password} onChange={handleChange} placeholder="Enter your Password" ></input>
            <div className="button" onClick={login}>Login</div>
        </div>
        </h1>
    )
}
export default Login