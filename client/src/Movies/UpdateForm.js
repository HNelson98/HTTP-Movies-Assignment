import React, { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';

const initialMovie = {
    id: '',
    title: '',
    director: '',
    metascore: '',
    stars: [],
}

const UpdateForm = props => {
    const {push} = useHistory();
    const {id} = useParams();
    const [movie, setMovie] = useState (initialMovie);

 
    
    return (
        <div>
            <h2>Update Movie</h2>
            <form>
                <input
                type= 'text'
                name= 'title'
                value={movie.title}
                placeholder= 'title'
                />
                <br/>
                <input
                type= 'text'
                name= 'director'
                value={movie.director}
                placeholder= 'director'
                />
                
            </form>
        </div>
    )
}