import React from 'react';
import './Beers.css';
import {Link} from 'react-router-dom';

export default class Beers extends React.Component {
    render(){
        return(
            <div className="beers">
            <nav className="nav justify-content-center"><Link to='/'><img src="/images/Home.jpg" alt="home"/></Link></nav>
            <h1>Beers Page</h1>
            </div>
        )
    }
}