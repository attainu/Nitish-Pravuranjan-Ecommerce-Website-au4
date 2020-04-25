import React, { Component } from 'react';
// import './../Css/Loder.css';

export default class Loder extends Component {
        render() {
                return (
                        <div >
                                <div className = "loader">
                                <img src={require('./../Images/Ellipsis.svg')} alt="loading..." />
                                </div>   
                        </div>
                )
        }
}
