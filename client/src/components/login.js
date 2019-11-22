import React, {Component} from 'react';
import PropTypes from 'prop-types';

class Login extends Component {


    constructor(props) {
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
        this.onChange = this.onChange.bind(this);
    }

    state = {
        name: "",
        username: "",
        password: ""
    };

    static defaultProps = {};
    static propTypes = {};

    onSubmit(e) {
        e.preventDefault();
        this.props.loginUser({
            ...this.state
        });
        this.setState({
            username: "",
            name: "",
            password: "",
        })

    }

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    render() {
        return (
            <div >

                <h1 className="block text-gray-700 text-sm font-bold mb-2 text-6xl">Login</h1>
                <div className="w-1/4 m-auto mt-8 ">

                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={this.onSubmit}>


                        <div className="mb-4">
                            <label className="block text-gray-700 text-1x1 font-bold mb-2" htmlFor="username">
                                Username
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="username"
                                id="username"
                                value={this.state.username}
                                onChange={this.onChange}
                                placeholder="Enter a username"/>
                        </div>
                        <div className="mb-6">
                            <label className="block text-gray-700 text-1x1 font-bold mb-2" htmlFor="password">
                                Password
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                                name="password"
                                id="password"
                                value={this.state.password}
                                onChange={this.onChange}
                                placeholder="Enter a password"/>


                        </div>
                        <div className="flex items-center justify-between">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                Sign in
                            </button>
                            <a className="inline-block align-baseline font-bold text-sm text-blue-500 hover:text-blue-800"
                               href="#">
                                Forgot Password?
                            </a>
                        </div>
                    </form>

                </div>
            </div>
        );
    }
}

export default Login;