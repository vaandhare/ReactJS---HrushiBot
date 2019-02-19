import React, { Component } from 'react';
import { HashRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import './Chatbot.css'
import Popup from "reactjs-popup";


class Chatbot extends React.Component{
    render(){
        return(
            <div>   
                <div className="container" onClick={this.props.click}>
                <div className="triangle-right"></div>
                <div className="content"><p>Hrushi Bot</p> </div>
                </div>
                <div className="ChatBg">
                    <div className="ChatPopUp">
                    <input type="text" placeholder="येथे काहीतरी टाइप करा.."/>
                    <button className="sendBtn">पाठवा</button>
                    </div>
                </div>
            </div>
            
        );
    }
}

export default Chatbot;