import React, { Component } from 'react';
import Movie from './movie.js';
import axios from 'axios'; 
import { RSA_PKCS1_OAEP_PADDING } from 'constants';
class MoviesContainer extends Component {
    constructor(props){
        super(props);

        this.state= {
            movies:[]
        };
    }
     componentDidMount(){
        const url = 'http://ax.itunes.apple.com/WebObjects/MZStoreServices.woa/ws/RSS/topMovies/json';
         axios.get(url).then((resp)=>{
            console.log('Resp:', resp.data.feed.entry);
            this.setState({
                movies: resp.data.feed.entry
            });
        });
       
    }

    render() {
        console.log('state', this.state)
        const movieList = this.state.movies.map((movieInfo, index)=>{
            return <Movie info = {movieInfo} key={index}/>;
        });

        return(
            <div>
                {movieList}
            </div>
        )
    
    }
}

export default MoviesContainer; 