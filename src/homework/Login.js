import "./Login.css";
import "./Main.js";
import {Link} from "react-router-dom";

const Login = () => {

    return (

        <div className="wrap">
            <div className="login">
                <h2>Wings</h2>
                <div className="login_id">
                    <h4>ID</h4>
                    <input type="id" name="" id="" placeholder="ID"/>
                </div>
                <div className="login_pw">
                    <h4>Password</h4>
                    <input type="password" name="" id="" placeholder="Password"/>
                </div>
                <div className="login_etc">
                    <div className="checkbox">
                        <input type="checkbox" name="" id=""/> Remember Me?
                    </div>
                    <div className="forgot_pw">
                        <Link to="">Forgot Password?</Link>
                    </div>
                </div>
                <div className="submit">
                    <Link to="/Main">
                        <button>Summit</button>
                    </Link>
                </div>
            </div>
        </div>

    )

}

export default Login;