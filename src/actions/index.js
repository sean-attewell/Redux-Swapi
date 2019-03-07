// we'll need axios
import axios from 'axios';

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure
export const GET_PEOPLE = "GET_PEOPLE";
export const GET_PEOPLE_SUCCESS = "GET_PEOPLE_SUCCESS";
export const GET_PEOPLE_FAILURE = "GET_PEOPLE_FAILURE";

export const URL = 'https://swapi.co/api/people'

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

export const getPeople = () => dispatch => {
    dispatch({ type: GET_PEOPLE });
    axios.get(URL)
        .then(({ data }) => {
            dispatch({ type: GET_PEOPLE_SUCCESS, payload: data.results });
        })
        .catch(err => {
            dispatch({ type: GET_PEOPLE_FAILURE, payload: err });
        });
}