import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
import axios from 'axios';

var moment = require('moment');

class Card extends Component {

    constructor(props) {
        super(props);
        this.days = this.days.bind(this);
        this.removeClick = this.removeClick.bind(this);
        this.doneClick = this.doneClick.bind(this);
    }

    state = {
        project: {
            _id: "",
            title: "",
            description: "",
            priority: "",


        }
    };

    componentDidMount() {
        this.setState(
            {
                project: this.props.project
            }
        )
    }


    static defaultProps = {};
    static propTypes = {};

    days() {

        var date = moment(this.state.project.createdAt).valueOf();

        var diffFormatted = moment(date).fromNow();

        return (
            <div><p>{diffFormatted}</p></div>

        );
    }

    priorityPicker() {
        switch (this.props.project.priority) {
            case 1:

                return (<div className="w-full h-5 bg-red-600 font-bold text-sm "></div>);
                break;
            case 2:
                return (<div className="w-full h-4 bg-yellow-600"></div>);
                break;
            case 3:
                return (<div className="w-full h-4 bg-green-600"></div>);
                break;
        }

    }

    removeClick(id) {
        axios.delete("/api/notes/" + id, {
            params: {
                id: id
            }
        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

    }

    doneClick(proj) {
        axios.put("/api/notes/" + proj._id, {
            state: 0

        }).then((res) => {
            console.log(res);
        }).catch((err) => {
            console.log(err);
        });

    }

    render() {

        return (
            <div className="float-left  w-1/3 max-w-1/3">
                <div className=" max-w-2xl float-left bg-white rounded overflow-hidden shadow-lg m-8  ">
                    {this.priorityPicker()}

                    <img className="w-full"
                         src="https://i.imgyukle.com/2019/11/20/RyeI1H.jpg" alt="img"/>
                    <div className="px-6 py-4">

                        <div className="font-bold text-xl mb-2">{this.state.project.title}</div>
                        <div className="text-gray-700  text-base ">
                            <p>{this.state.project.description}</p>

                        </div>

                    </div>
                    <button
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mr-4 mt-2">

                        {this.days()}


                    </button>
                    <div className="px-6 py-4 justify-between">

                        <button onClick={() => {
                            this.removeClick(this.props.project._id)
                        }}
                                className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded-full mr-4 ">Remove

                        </button>

                        <Link>
                            <button onClick={() => {
                                this.doneClick(this.props.project)
                            }}
                                    className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-full">Done!

                            </button>
                        </Link>
                    </div>

                </div>
            </div>
        );

    }
}

export default Card;