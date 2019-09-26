import React, { useState } from "react";
import axiosWithAuth from '../utilities/AxiosWithAuth'

class Login extends React.Component {
    state = {
        credentials: {
            username: '',
            password: ''
        }
    };

    handleChange = e => {
        this.setState({
            credentials: {
                ...this.state.credentials,
                [e.target.name]: e.target.value
            }
        });
    };

    login = e => {
        e.preventDefault();
        axiosWithAuth()
        .post('/login', this.state.credentials)
        .then(res => {
            localStorage.setItem('token', res.data.payload);
            // redirecting to the mainpage/dashboard ???
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err));
    };

    render() {
        return (
            <div></div>
        )
    };
}

// const information = {
//     "username": "",
//     "password": ""
// };

// const Login = (props) => {
//     const [login, setLogin] = useState([]);

//     const getlogin = () => {
//         axiosAuth().get('https://org-chart-lambda.herokuapp.com/api/auth/login')
//         .then(res => {
//             setLogin(res.data);
//         })
//         .catch(err => console.log(err.response));
//     };

//     useEffect(() => {
//         getlogin();
//     }, []);
// };

export default Login;