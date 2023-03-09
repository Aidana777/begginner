import './login.css'
import { BrowserRouter as useHistory } from "react-router-dom";

export const Login = (props) => {
    console.log(props);
    const handleLogIn = (e) => {
        e.preventDefault()
        props.setIsLoggedIn(true)
        props.useHistory().push('/')
    }
    return (
        <h1>
            <form className='loginForm' onSubmit={handleLogIn}>
                <h2>Auto</h2>
                <div>
                    <input type="text"
                        className='loginFormInput'
                        placeholder='LoginForm'
                        required
                    />
                </div>
                <div>
                    <input type="password"
                        className='loginFormInput'
                        placeholder='LoginFormPassword'
                        required
                    />
                </div>
                <div>
                    <button className='btn' type='submit'>Sign in</button>
                </div>
            </form>
        </h1>
    )
}