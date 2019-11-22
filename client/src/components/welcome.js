import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {BrowserRouter as Router, Switch, Route, Link, NavLink, Redirect} from 'react-router-dom';
class Welcome extends Component {

    state = {

    };

    static defaultProps = {};
    static propTypes = {};

    render() {
        return (
            <div>
                <h1 className="text-4xl font-bold">Welcome here</h1>

            </div>
        );
    }
}

export default Welcome;