import React from 'react';
import './Home.css';
import {Link} from 'react-router-dom';

export default class Home extends React.Component {
    render() {
        return (
            <div className="home-container">

                <Link to='/beers'className="all-beers" style={{textDecoration: 'none'}} style={{color: 'black'}}>
                    <img src="/images/AllBeers.jpg" alt="all-beers"/>
                    <h2>All Beers</h2>
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                         Possimus beatae ducimus, eligendi, veniam aliquam veritatis
                          voluptates quod illum libero sapiente itaque nesciunt quisquam
                           saepe distinctio esse culpa repellat magnam dignissimos.</p>
                </Link>

                <Link to='random-beer' className="random-beer" style={{textDecoration: 'none'}} style={{color: 'black'}}>
                    <img src="/images/random-beer.jpg" alt="random-beer"/>
                    <h2>Random Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                         Officia eligendi accusamus aliquam dicta quis doloremqu
                         e a laborum in esse obcaecati porro, tempora nobis, nihil modi,
                          illum similique accusantium quam dolore?</p>
                </Link>

                <Link to='new-beer' className="new-beer" style={{textDecoration: 'none'}} style={{color: 'black'}}>
                    <img src="/images/NewBeer.jpg" alt="new-beer"/>
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                         Magni asperiores nobis aliquam labore aperiam maxime nam.
                          Ratione natus saepe voluptas rem sunt dicta cupiditate 
                          nihil enim explicabo et, consectetur impedit!</p>
                </Link>

            </div>
        )
    }
}