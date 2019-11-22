import React, {Component} from 'react';
import PropTypes from 'prop-types';


class Register extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    state = {
        name: "",
        username: "",
        password: "",
        email:""
    };

    static defaultProps = {};
    static propTypes = {};

    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        this.props.registerUser({
            ...this.state
        });
        // Anasayfaya redirect
        this.setState({
            name: '',
            username: '',
            password: '',
            email:''
        })
    }


    render() {
        return (
            <div>
                <h1 className="block text-gray-700 text-sm font-bold mb-2 text-6xl ">Sign Up</h1>
                <div className=" w-1/4  m-auto mt-8">

                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={this.onSubmit}>

                        <div className="mb-4">
                            <label className="block text-gray-700 text-1x1 font-bold mb-2" htmlFor="username">
                                Name
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="name"
                                id="name"
                                value={this.state.name}
                                onChange={this.onChange}
                                placeholder="Enter a name"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-1xl font-bold mb-2" htmlFor="username">
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
                        <div className="mb-4">
                            <label className="block text-gray-700 text-1x1 font-bold mb-2" htmlFor="username">
                                Email
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="email"
                                id="email"
                                value={this.state.email}
                                onChange={this.onChange}
                                placeholder="Enter a email"/>
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
                                Sign Up
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

export default Register;

