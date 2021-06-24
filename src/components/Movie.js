
import React, { Component } from 'react';
import '../App.css';
import { Button , Card,CardColumns } from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';
//import StarRatingComponent  from 'react-rating-stars-component';
import StarRatingComponent from 'react-star-rating-component';

import { useState, useEffect } from 'react';



const Movie = (props) => {

    const movies = props.movies;



    return (
      <>
      	
   
        <div className="card movie_card ">
            <img src={props.movie.posterUrl} class="card-img-top" alt="..."/>
            <div class="card-body">
                
                <h5 class="card-title">{props.movie.title}</h5>
                {props.movie.description}<br/>
             <StarRatingComponent 
             
           
            editing= {false}
            value={props.movie.rate}
             /> 
            </div>
        </div>
    
    </>
    );
   };
   export default Movie;