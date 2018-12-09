import React from 'react';
import './NewBeer.css';
import axios from 'axios';
import {Link} from 'react-router-dom';

export default class NewBeer extends React.Component {
    constructor(){
        super();
        this.state = {
            name:'',
            tagline:'',
            description:'',
            first_brewed:'',
            brewers_tips:'',
            attenuation_level:'',
            contributed_by:'',

        }
    }

    changeHandler = (e) => {
        const {name, value} = e.target;
        this.setState({...this.state, [name]: value});
    }

    submitHandler = (e) => {
        e.preventDefault();

        let {name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by} = this.state;
        attenuation_level = parseInt(attenuation_level);
        console.log(this.state);

        axios.post(`https://ironbeer-api.herokuapp.com/beers/new`, { name, tagline, description, first_brewed, brewers_tips, attenuation_level, contributed_by  })
        .then(()=>{
            console.log(this.state);
            this.setState({...this.state, name:'', tagline:'', description:'', first_brewed:'', brewers_tips:'', attenuation_level:'', contributed_by: ''})
        })
        .catch((err)=>{return err})
    }

    render(){
        return(
            <form className="new-beer-form" onSubmit={(e)=>this.submitHandler(e)}>
                <nav className="nav justify-content-center"><Link to='/'><img src="/images/Home.jpg" alt="home" /></Link></nav>
                <div className="form-container">
                <label htmlFor="name">Name</label>
                <input type="text" name="name" placeholder="name" onChange={(e)=>{this.changeHandler(e)}}/>
                </div>
                <div className="form-container">
                <label htmlFor="tagline">Tagline</label>
                <input type="text" name="tagline" placeholder="tagline" onChange={(e)=>{this.changeHandler(e)}}/>
                </div>
                <div className="form-container">
                <label htmlFor="description">Description</label>
                <input type="text" name="description" placeholder="tagline" onChange={(e)=>{this.changeHandler(e)}}/>
                </div>
                <div className="form-container">
                <label htmlFor="first-brewed">First brewed</label>
                <input type="text" name="first_brewed" placeholder="first-brewed" onChange={(e)=>{this.changeHandler(e)}}/>
                </div>
                <div className="form-container">
                <label htmlFor="brewers-tips">Brewer's tips</label>
                <input type="text" name="brewers_tips" placeholder="brewers-tips" onChange={(e)=>{this.changeHandler(e)}}/>
                </div>
                <div className="form-container">
                <label htmlFor="attenuation-level">Attenuation level</label>
                <input type="text" name="attenuation_level" placeholder="attenuation-level" onChange={(e)=>{this.changeHandler(e)}}/>
                </div>
                <div className="form-container">
                <label htmlFor="contributed-by">Contributed by</label>
                <input type="text" name="contributed_by" placeholder="contributed-by" onChange={(e)=>{this.changeHandler(e)}}/>
                </div>
                <button className="btn btn-info" type="submit">Post new beer</button>
            </form>

        )
    }
}