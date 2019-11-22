import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route, Link, NavLink} from 'react-router-dom';

class Navbar extends Component {

    constructor(props) {
        super(props);

    };

    state = {};

    static defaultProps = {};
    static propTypes = {};


    render() {
        const isLoggedIn = this.state.isLoggedIn;
        var loginButton;

        return (

            <div >
                <nav className="flex items-center justify-between flex-wrap bg-blue-800 p-3">
                    <div className="flex items-center flex-shrink-0 text-white mr-6">
                        <svg className="fill-current h-8 w-8 mr-2 ml-12" width="54" height="54" viewBox="0 0 54 54"
                             xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z"/>
                        </svg>
                        <Link to="/"><span className="font-bold text-4xl tracking-tight ">Task-man</span></Link>
                    </div>
                    <div className="block lg:hidden">
                        <button
                            className="flex items-center px-3 py-2 border rounded text-teal-200 border-teal-400 hover:text-white hover:border-white">
                            <svg className="fill-current h-3 w-3" viewBox="0 0 20 20"
                                 xmlns="http://www.w3.org/2000/svg"><title>Menu</title>
                                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"/>
                            </svg>
                        </button>
                    </div>
                    <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto  mr-12">
                        <div className="text-sm lg:flex-grow">

                        </div>
                        {(() => {
                            if (this.props.user.isLoggedIn) {
                                //this.props.user.isLoggedIn = false;
                                return (

                                    <div>
                                        <div
                                            className="inline-block text-1x1 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-3">
                                            {
                                                this.props.user.name
                                            }


                                        </div>
                                        <div
                                            className="inline-block text-1x1 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-3">
                                            <Link to="/" onClick={this.props.logOut}> LOG OUT</Link>

                                        </div>
                                    </div>
                                );

                            } else {
                                return (

                                    <div>

                                        <div
                                            className="inline-block text-1x1 px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-3">
                                            <Link to="/signup"> SIGN UP</Link>

                                        </div>
                                        <div
                                            className="inline-block text-1xl px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0 mr-2">
                                            <Link to="/login"> SIGN IN</Link>

                                        </div>
                                    </div>

                                );
                            }
                        })()}
                    </div>
                </nav>


                <nav className="navbar navbar-expand-lg navbar-light bg-light p-3">


                    <button className="navbar-toggler" type="button" data-toggle="collapse"
                            data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false"
                            aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNavDropdown">
                        <ul className="navbar-nav">
                            <li className="nav-item active">

                            </li>


                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;