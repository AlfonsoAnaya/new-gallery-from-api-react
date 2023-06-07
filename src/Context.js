import React, { useState, useEffect } from "react";

const Context = React.createContext();

function ContextProvider({ children }) {


    const [photos, setPhotos] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [count, setCount] = useState("30");


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
        fetch(`https://apis.scrimba.com/unsplash/photos/random/?count=${count}&orientation=portrait&query=plants`)
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
    }, [count]);


    return (
        <Context.Provider value={{
            photos,
            loading,
            error
        }}>
            {children}
        </Context.Provider>
    )

};





export { ContextProvider, Context }

