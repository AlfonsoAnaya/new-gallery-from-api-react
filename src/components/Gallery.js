import PhotoCard from "./PhotoCard.js";
import { useContext } from "react";
import { Link } from "react-router-dom"

import { Context } from "../Context.js";

function Gallery() {
    let { photos, loading, error } = useContext(Context);
    console.log(photos);
    if (loading) return (<div className="wait"><p>loading...</p></div>)
    if (error) return (<div className="wait"><p>error...</p></div>)

    return (
        <div className="grid-container">
            <Link to="/photo">
                <PhotoCard 
                    urlThumb="https://images.unsplash.com/photo-1683488780112-f47a64de5d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYxMjkyMDZ8&ixlib=rb-4.0.3&q=80&w=200"
                />
            </Link>
            {photos.map((photo, index) => <PhotoCard
                photographerName={photo.user.name}
                urlSmall={photo.urls.small}
                urlThumb={photo.urls.thumb}
                alt={photo.alt_description}
                photoViews={photo.views}
                photographerProfile={photo.user.links.html}
            />)}
        </div>
    )
}

export default Gallery;

