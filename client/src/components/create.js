import React, {Component} from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import ImageUploader from 'react-images-upload';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';


class Create extends Component {

    constructor(props) {
        super(props);
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
        this.handleDateChange = this.handleDateChange.bind(this);

        this.onDrop = this.onDrop.bind(this);
    }


    state = {
        title: "",
        description: "",
        priority: "medium",
        startDate: new Date(),
        submitDone:false,
        picture: new File([], "", undefined)




    };

    static defaultProps = {};
    static propTypes = {};




    onChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleChange(event) {
        this.setState({priority: event.target.value});
    }

    handleDateChange = date => {
        this.setState({
            startDate: date
        });
    };

//date => setStartDate(date)
    onSubmit(e) {
        e.preventDefault();
        var pri = 1;

        switch (this.state.priority) {
            case "high":
                pri = 1;
                break;
            case "medium":
                pri = 2;
                break;
            case "low":
                pri = 3;
                break;


        }


        axios.post("api/notes", {
                title: this.state.title,
                description: this.state.description,
                username: this.props.username,
                state: 1,
                priority: pri,
                createdAt:this.state.startDate,


            }
        );


        // Anasayfaya redirect
        this.setState({
            submitDone:true,
            name: '',
            username: '',
            password: '',
            email: ''
        });



    }

    onDrop(picture) {


        this.setState({
            picture:picture

        });

        //console.log(picture);
        console.log(this.state.picture);


    }


    render() {
        return (
            <div>
                <h1 className="block text-gray-700 text-sm font-bold mb-2 text-6xl ">Create New</h1>
                <div className=" w-1/4  m-auto mt-8">

                    <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 " onSubmit={this.onSubmit}>




                        <div className="mb-4">
                            <label className="block text-gray-700 text-1x1 font-bold mb-2" htmlFor="username">
                                Title
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="title"
                                id="title"
                                value={this.state.title}
                                onChange={this.onChange}
                                placeholder="Enter a title"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-1xl font-bold mb-2" htmlFor="username">
                                Description
                            </label>
                            <input
                                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                                name="description"
                                id="description"
                                value={this.state.description}
                                onChange={this.onChange}
                                placeholder="Enter a description"/>
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700 text-1xl font-bold mb-2" htmlFor="username">
                                Date
                            </label>
                            <DatePicker
                                selected={this.state.startDate}
                                onChange={this.handleDateChange}
                                showTimeSelect
                                timeFormat="HH:mm"
                                timeIntervals={15}
                                timeCaption="Time"
                                dateFormat="MMMM d, yyyy h:mm aa"

                            />
                        </div>


                        <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                                   htmlFor="grid-state">
                                Priority
                            </label>
                            <div>
                                <select
                                    value={this.state.priority}
                                    onChange={this.handleChange}
                                    className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                    id="grid-state">
                                    <option value="high">High</option>
                                    <option value="medium">Medium</option>
                                    <option value="low">Low</option>
                                </select>
                                <div
                                    className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg"
                                         viewBox="0 0 20 20">
                                        <path
                                            d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                                    </svg>
                                </div>
                            </div>
                        </div>

                        <div className="flex items-center justify-between mt-5">
                            <button
                                className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                                type="submit">
                                {this.state.submitDone?<Redirect to="/">dfdf</Redirect>:<div>Create</div>}

                            </button>

                        </div>
                    </form>

                </div>

            </div>
        );
    }
}

export default Create;