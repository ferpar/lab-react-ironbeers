import React from 'react';
import './RandomBeer.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class RandomBeer extends React.Component {

    constructor() {
        super();

        this.state = {
            beer: null,
        }
    }


    componentDidMount() {
        this.getSingleBeer();
        
    }

    getSingleBeer = () => {
        
        axios.get(`https://ironbeer-api.herokuapp.com/beers/random`)
            .then((singleBeer) => {
                console.log(singleBeer.data);
                this.setState({ ...this.state, beer: singleBeer.data })
            })
            .catch((err) => {
                return err
            })
    }

    render() {
        
        console.log(this.state);

        
        if (this.state.beer === null) {
            return (
                <div className="beers">
                    <nav className="nav justify-content-center"><Link to='/'><img src="/images/Home.jpg" alt="home" /></Link></nav>
                    <h1>test</h1>
                    <h1>Loading...</h1>
                
                </div>
            )    
        } else {


        let theBeer = this.state.beer[0];
        

        return (
            <div className="beers">
                <nav className="nav justify-content-center"><Link to='/'><img src="/images/Home.jpg" alt="home" /></Link></nav>
                <div className="img-container">
                <img src={theBeer.image_url} alt="beer-img"/>
                </div>
                <h2>{theBeer.name}</h2>
                <p style={{color: 'grey'}}>{theBeer.tagline} <span style={{color: 'black'}}>{theBeer.created_at.slice(5,7)}/{theBeer.created_at.slice(0,4)}</span></p>
                <p><strong>{theBeer.description}</strong></p>
                <p>{theBeer.contributed_by}</p>
            </div>
        )

        }
    }
}