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

    
}