import React from 'react';
import './BeerDetail.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class BeerDetail extends React.Component {

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
        console.log(this.props.match.params);
        const {params} = this.props.match;
        console.log(params);
        axios.get(`https://ironbeer-api.herokuapp.com/beers/single/${params.id}`)
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


        let theBeer = this.state.beer;
        

        return (
            <div className="beer-detail">
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