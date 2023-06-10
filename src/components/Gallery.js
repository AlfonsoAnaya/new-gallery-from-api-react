import PhotoCard from "./PhotoCard.js";
import { useContext } from "react";


import { Context } from "../Context.js";

function Gallery() {
    let { photos, loading, error } = useContext(Context);
    console.log(photos);
    if (loading) return (<div className="wait"><p>loading...</p></div>)
    if (error) return (<div className="wait"><p>error...</p></div>)

    return (
        <div className="grid-container">
            {photos.map((photo) => <PhotoCard
                photoId={photo.id}
                photographerName={photo.user.name}
                urlSmall={photo.urls.small}
                urlThumb={photo.urls.thumb}
                urlRegular={photo.urls.regular}
                urlFull={photo.urls.full}
                urlRaw={photo.urls.raw}
                alt={photo.alt_description}
                photoViews={photo.views}
                photographerProfile={photo.user.links.html}
                photoLocation={photo.location.name}
                photographerPortfolio={photo.user.portfolio_url}
                key={photo.user.id}
            />)}
        </div>
    )
}

export default Gallery;

