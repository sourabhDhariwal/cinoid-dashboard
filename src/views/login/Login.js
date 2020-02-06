import React from 'react';
import './login.css';
// import propertylogo from './raffles_logo.png';
import checkicon from './arrivallogin.png';
import username from './username.png';
import password from './password.png';
import PropTypes from "prop-types";
import { DefaultLayout } from "../../layouts";
// import { userActions } from '../_actions';
// import { connect } from 'react-redux';
// import Cookies from 'js-cookie';
// import 'react-notifications-component/dist/theme.css';
class Login extends React.Component {

    constructor(props) {
        super(props)
       
        this.state = {
            username: '',
            password: '',
            submitted: false
        };
        this.handleInputChange = this.handleInputChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        console.log(localStorage.getItem('isLogin'))
        if(localStorage.getItem('isLogin')==true){
            window.location = "#/blog-overview";
        }else{
            window.location = "#/";
        }
    }

    handleInputChange = (event) => {
        console.log("Login function call...",event.target.value)
        const { value, name } = event.target;
        this.setState({
            [name]: value
        });
    }

    handleSubmit = (e) => {
        e.preventDefault();
        localStorage.setItem('isLogin',true);
        window.location = "#/blog-overview";
      
        // this.setState({ submitted: true });
        // const { username, password } = this.state;
        // if (username && password) {
        //     console.log("form Submit");
        //     this.props.login(username, password);
        //     // this.props.login(username,password);
        // }
    }
    
    render() {
         return (
            <div className="login-form">
                <div className="row align-items-center h-100">
                    <div className="col-md-8 mx-auto login_bg_image">
                        <div className="row align-items-center">
                            <div className="col-md-6">
                                <div className="text-center login_logo">
                                    <img src="" alt="logo" />
                                </div>
                            </div>
                            <div className="col-md-6">

                                <div className="form_wrapper">
                                    <div className="check_icon">
                                        {/* <img sr c={checkicon} alt="not found" /> */}
                                    </div>
                                    <div className="login_heading">
                                        <h1>Cinoid Dashbard</h1>
                                    </div>
                                    <div className="login_form_wrapper clearfix form-wrapper-outer">
                                        <form autoComplete="off" method="post" onSubmit={this.handleSubmit}>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-addon">
                                                        <img src={username} alt="not found" />
                                                    </div>
                                                    <input type="text"
                                                        className="form-control"
                                                        placeholder="Username"
                                                        required="required"
                                                        name="username"
                                                        autoComplete="off"
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <div className="input-group">
                                                    <div className="input-group-addon">
                                                        <img src={password} alt="not found" />
                                                    </div>
                                                    <input type="password"
                                                        className="form-control"
                                                        placeholder="Password"
                                                        required="required"
                                                        name="password"
                                                        autoComplete="off"
                                                        onChange={this.handleInputChange} />
                                                </div>
                                            </div>
                                            <div className="form-group">
                                                <button type="submit" className="btn btn-primary btn-block">Sign In</button>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}
export default Login;

// function mapState(state) {
//     console.log(state)
//     return state.authentication ;
// }

// const actionCreators = {
//     login: userActions.login,
//     logout: userActions.logout
// };

// const connectedLoginPage = connect(mapState, actionCreators)(Login);
// export { connectedLoginPage as Login };
