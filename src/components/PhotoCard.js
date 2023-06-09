import { Link } from "react-router-dom"
import { useContext } from "react";
import { Context } from "../Context.js";

/*                <li>Full urls.full</li>
                <li>Regular</li>
                <li>Raw</li>
            </li>

            */

function PhotoCard({ photoId, photographerName, urlSmall, urlThumb, urlRegular, urlFull, urlRaw, alt, photoViews, photographerProfile, photoLocation, photographerPortfolio }) {
    let { handleBookmark } = useContext(Context);
    return (
        <div className="photo-card">
            <div className="image-container">
                <Link to={`/photo/${photoId}`} state={{
                    photographerName: photographerName,
                    photographerProfile: photographerProfile,
                    photoLocation: photoLocation,
                    photographerPortfolio: photographerPortfolio,
                    urlSmall: urlSmall,
                    urlThumb: urlThumb,
                    urlRegular: urlRegular,
                    urlFull: urlFull,
                    urlRaw: urlRaw,
                    alt: alt,
                    photoViews: photoViews,

                    }}>
                    <img src={urlSmall} alt={alt}
                        className="image" />
                </Link>
            </div>
            <figcaption>

                <p className="author">Photo by:
                    <a className="link" target="blank" href={photographerProfile}> {photographerName}</a>
                </p>

                <p className="views"> Views: {photoViews}</p>
                <button onClick ={(e)=>handleBookmark()}>Add bookmark</button>
            </figcaption >
        </div >
    )
}

export default PhotoCard