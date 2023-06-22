import {useContext} from "react"
import {Context} from "../Context"

import { useState } from "react"

function SearchBar() {
    let {handleInputChange, query, count} = useContext(Context);
    const [newQuery, setNewQuery] = useState('');
    const [newCount, setNewCount] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="search-bar">
            <form className="form" id="form" onClick={handleSubmit}>
                <label>
                    <input id="query-input" 
                    type="text" 
                    placeholder="theme" 
                    onChange={(e)=>setNewQuery(e.target.value)}/>
                </label>
                <label>
                    <input id="query-number" 
                    type="number" 
                    placeholder="No. of photos" 
                    min="1" max="30"
                    onChange={(e)=>setNewCount(e.target.value)}
                    />
                </label>
                <button class="btn" type="submit" onClick={(e)=>handleInputChange(newQuery, newCount)}>Search</button>
            </form>
        </div>
    )
}

export default SearchBar;