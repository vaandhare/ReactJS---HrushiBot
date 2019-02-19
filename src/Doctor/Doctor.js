import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import SignUpForm from './SignUpForm';
import SignInForm from './SignInForm';
import './Doctor.css';


class Doctor extends React.Component{
    render(){
        return(
            <Router basename="/react-auth-ui/">
                <div className="App">
                <div className="App__Form">
                
                    <div className="FormTitle">
                        <NavLink to="/sign-in" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign In</NavLink> or <NavLink exact to="/" activeClassName="FormTitle__Link--Active" className="FormTitle__Link">Sign Up</NavLink>
                    </div>

                    <Route exact path="/" component={SignUpForm}>
                    </Route>
                    <Route path="/sign-in" component={SignInForm}>
                    </Route>
                </div>

                </div>
            </Router>
        );
    }
}

export default Doctor;