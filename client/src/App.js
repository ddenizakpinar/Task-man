import React, {Component} from 'react';

import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import Navbar from "./components/navbar";
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import cookie from 'react-cookies';

import Login from './components/login';
import Register from './components/register';
import Welcome from "./components/welcome";
import Projects from "./components/projects";
import Create from "./components/create";


class App extends Component {

    constructor(props) {
        super(props);
        this.registerUser = this.registerUser.bind(this);
        this.loginUser = this.loginUser.bind(this);
        this.logOut = this.logOut.bind(this);
    }

    state = {
        user: {
            isLoggedIn: false,
            name: "",
            username: ""
        },

    };


    componentDidMount() {
        const a = cookie.load("user");
        if (a) {
            this.setState({
                user: {
                    isLoggedIn: cookie.load("user").isLoggedIn,
                    username: cookie.load("user").username,
                    name: cookie.load("user").name
                }
            })
        }


    }

    registerUser(user) {

        axios.post('/register', {
            username: user.username,
            password: user.password,
            email: user.email,
            name: user.name
        })
            .then(function (response) {

                console.log(response);


            })
            .catch(function (error) {
                console.log(error);
            }).then(() => {
            this.loginUser(user);
        });


    }

    loginUser(userr) {


        axios.post('/login', {
            username: userr.username,
            password: userr.password
        }).then((res) => {
            // res.data.status === true ? this.setState({isLoggedIn: true, name: "deniz"}) : null;
            console.log("sssss" + res.data.username);

            this.setState({
                user: {
                    isLoggedIn: res.data.status,
                    name: res.data.name,
                    username: res.data.username
                },
                redirect: true
            });
            cookie.save('user', this.state.user, {path: '/'});


        }).catch((err) => {
            console.log(err);
        })
    }


    logOut() {
        // Cookie logout
        this.setState({
            user: {
                isLoggedIn: false
            }
        });
        cookie.remove("user");
    }


    render() {


        return (
            <div className="App bg-gray-300 absolute h-screen h-full  w-full">
                <Router>

                    <Navbar user={this.state.user} logOut={this.logOut}/>

                    <br/>
                    <Switch>
                        <Route path="/" exact> {this.state.user.isLoggedIn ?
                            <Projects username={this.state.user.username}/> : <Welcome/>}</Route>


                        <Route path="/signup" exact strict>
                            {
                                !this.state.user.isLoggedIn ? <Register registerUser={this.registerUser}/> :
                                    <Redirect to="/"/>
                            }
                        </Route>
                        <Route path="/create" exact strict>
                            {
                                <Create username={this.state.user.username}/>
                            }
                        </Route>
                        <Route path="/login" exact strict render={() => {
                            if (!this.state.user.isLoggedIn) {
                                return (<Login loginUser={this.loginUser}/>);
                            } else {
                                return (<Redirect to="/"></Redirect>)
                            }
                        }}/>
                    </Switch>
                </Router>

            </div>
        );
    }
}

export default App;