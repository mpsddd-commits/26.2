import { useState } from "react"
import axios from "axios"
import { useCookies } from 'react-cookie';

const [cookies, setCookie, removeCookie] = useCookies(["email"]);

axios.defaults.withCredentials = true;

const createCookie = () => {
    setCookie("email", "hyunseo", {
      path: "/",          
      maxAge: 60 * 60 * 7,
      expires: 60 * 60 * 7,
      secure: true,       
      sameSite: "lax",
    });
  };

const Login = () => {
    
    const [email, setEmail] = useState("")

    const submitEvent = e => {
        e.preventDefault()
        const params={email}
        console.log(params)
        axios.post('/email')
        .then(function (response) {
            console.log(response);
        })
        .catch(function (error) {
            console.log(error);
        }); 
    }

    return(
        <>
        <h1>로그인화면</h1>

        <form onSubmit={submitEvent}>
        <label htmlFor="email" >이메일</label>
        <input id="email" name="email" value={email} onChange={e=>setEmail(e.target.value)} />
        <button type="submit">제출</button>
        <a href="/" type="btn">태원</a>

        </form>
        </>
    )
}
export default Login