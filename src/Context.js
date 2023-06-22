import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {


    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [count, setCount] = useState("30");
    const [query, setQuery] = useState("plants");
    const [search, setSearch] = useState(0)


    /*
    function fetchImages() {
        fetch("https://apis.scrimba.com/unsplash/photos/random/?count=30&orientation=portrait&query=plants")
            .then(response => {
                if (response.ok) {
                    return response.json();
                }
            })
            .then(data => setImages(data))
            .catch(error => {
                console.log("Error fetching data")
            })
    };
    */



    useEffect(() => {
        setPhotos([]);
        fetch(`https://apis.scrimba.com/unsplash/photos/random/?count=${count}&orientation=portrait&query=${query}`)
        .then(response => {
            if (response.ok) {
                return response.json();
            }
        })
        .then(data => setPhotos(data))
        .catch(error => {
            console.log("Error fetching data");
            setError(true);
        })
        .finally(
            setLoading(false)
        )
    }, [query, count, search]);

    function handleInputChange(queryInput, countInput) {
        setQuery(queryInput);
        if (countInput === '') {setCount("10")}
        else {setCount(countInput.toString());}
        setSearch(search+1);
    };

    return (
        <Context.Provider value={{
            photos,
            loading,
            error,
            query,
            count,
            handleInputChange
        }}>
            {children}
        </Context.Provider>
    )

};





export { ContextProvider, Context }

