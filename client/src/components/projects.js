import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import Card from "./card";

class Projects extends Component {

    state = {
        projects: []
    };

    static defaultProps = {};
    static propTypes = {};

    componentDidMount() {
        axios.get('/api/notes/' + this.props.username, {
            params: {
                name: this.props.username
            }
        })
            .then((res) => {

                this.setState({
                    projects: res.data
                });

            })
            .catch(function (error) {
                console.log(error);
            })
            .finally(function () {
                // always executed
            });
    }

    render() {
        return (

            <div className="m-auto bg-gray-300">

                <div className="w-full h-16 inline-block relative ">
                    <h1 className="font-bold text-4xl text-blue-700 inline-block w-full float-left ">Ongoing
                        Tasks</h1>
                    <Link to="/create">
                        <button style={{position: "absolute", top: "0", right: "0"}}
                                className="bg-blue-500 hover:bg-red text-white float-right mr-32 font-bold py-2 px-4 rounded text-2xl">
                            Create New
                        </button>
                    </Link>
                </div>

                {
                    this.state.projects.map((project) => {
                        return project.state === 1 ? (<Card project={project}></Card>) : null
                    })
                }
                <div className="w-full h-16 inline-block ">
                    <h1 className="font-bold text-4xl text-blue-700 w-full ">Completed Tasks</h1>

                </div>
                {
                    this.state.projects.map((project) => {
                        return project.state === 0 ? (<Card project={project}></Card>) : null
                    })
                }
            </div>
        );
    }
}

export default Projects;