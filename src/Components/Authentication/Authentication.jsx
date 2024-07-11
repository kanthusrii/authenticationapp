import {useState} from "react";
import '../Authentication/Authentication.css';
//import axios from "axios";


const Login = () => {
    const [username,setUserName]=useState("");
    const [password,setPassword]=useState("");
    // axios.defaults.headers.common['Access-Control-Allow-Origin'] = '*';
    // axios.defaults.headers.common['Access-Control-Allow-Headers'] = 'Origin, X-Requested-With, Content-Type, Accept';


    const Login=async ()=>{
        debugger;
        try{
            // const response=await axios.post("http://localhost:24202/api/auth/login",
            //     {
            //         UserName : username,
            //         Password : password
            //     }
            // );
            // const token=response.data;
        }catch(error){  
            console.log(error)
        }
        // console.log(username);
        // console.log(password);
        // localStorage.setItem("username",username);
        // localStorage.setItem("password",password);
    }
    return (
        <>
            <div className='login'>
                <div>
                    <h1>Login Authentication</h1>
                    <div>
                        <label> UserID        :    </label>
                        <input type="text" placeholder="UserName" value={username} onChange={e=>setUserName(e.target.value)}/>
                    </div>
                    <div>
                        <label> Password</label>
                        <input type="text" placeholder="Password" value={password} onChange={e=>setPassword(e.target.value)}/>
                    </div>
                    <button onClick={()=>Login()}>Login</button>
                </div>
            </div>
        </>
    );
};

export default Login;