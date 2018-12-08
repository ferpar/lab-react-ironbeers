import React from 'react';
import './Beers.css';
import { Link } from 'react-router-dom';
import axios from 'axios';

export default class Beers extends React.Component {

    constructor() {
        super();

        this.state = {
            listOfBeers: [],
        }
    }

    getAllBeers = () => {
        axios.get('https://ironbeer-api.herokuapp.com/beers/all')
            .then((beerList) => {
                console.log(beerList.data);
                this.setState({ ...this.state, listOfBeers: beerList.data })
            })
            .catch((err) => {
                return err
            })
    }

    componentDidMount() {
        this.getAllBeers();
    }

    render() {

        let beerList = this.state.listOfBeers.map((beer) => {
            return (
                <Link to={`/beers/${beer._id}`} className="beer-container" key={beer._id} style={{textDecoration:'none'}} style={{color:'black'}}>
                    <div className="img-container">
                        <img className="img-beer" src={beer.image_url} alt="beer-img" />
                    </div>
                    <div className="text-container">
                        <h2>{beer.name}</h2>
                        <h5>{beer.tagline}</h5>
                    </div>
                </Link>
            )
        })

        return (
            <div className="beers">
                <nav className="nav justify-content-center"><Link to='/'><img src="/images/Home.jpg" alt="home" /></Link></nav>
                {beerList}
            </div>
        )
    }
}