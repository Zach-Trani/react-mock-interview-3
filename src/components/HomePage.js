// Make a request to the jokes api at https://sv443.net/jokeapi/v2/
// Display a joke
// Add a button that allows a user to get a new joke onClick
import { useState, useEffect } from "react";
import axios from "axios";

const HomePage = () => {
    // define joke state
    
    // button with an onclick that calls..
        // axios get req function
            // store res in state

    // make api call on on page render

    const [joke, setJoke] = useState('');
    const [category, setCategory] = useState('Any');
    let [counter, setCounter] = useState(0);
    
    const getJoke = async () => {
        const response = await axios.get(`https://v2.jokeapi.dev/joke/${category}?type=single`);
        setJoke(response.data.joke)
        console.log('Joke called with category: ', category);
    };

    const handleClick = (e) => {
        getJoke();
    };
    const updateCounter = () => {
        setCounter(counter+=1);
    };

    const handleCategory = (string) => {
        setCategory('');
        setCategory(string);
    };
    
    // display joke
    return (
        <div>
            <button onClick={() => handleCategory('Programming')}>Programming Category</button>
            <div>
                <button onClick={handleClick}>Generate Joke</button>
            </div>
            <div>
                {joke}
            </div>
            <div>
                <button onClick={updateCounter}>Update Counter</button>
            </div>
            <div>
                {counter}
            </div>
        </div>
    );
};

export default HomePage;