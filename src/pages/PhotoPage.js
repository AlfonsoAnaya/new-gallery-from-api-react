import { useLocation } from 'react-router-dom';

function PhotoPage() {
    const location = useLocation()
    const { photographerName, 
            urlSmall, 
            urlThumb, 
            urlRegular, 
            urlFull, 
            urlRaw, 
            alt, 
            photoViews, 
            photographerProfile, 
            photoLocation, 
            photographerPortfolio } = location.state 
    return (
        <div className="photo-page__flex-container">
        <div className="image-container-photo-page">
            <img className="image-photo-page" src={urlSmall} alt={alt}></img>
        </div>
        <ul className="photo-page-info">
        <li ><strong><h3 className="info-section-title">Photo</h3></strong>
                <li><a href={urlFull} target="_blank" rel="noreferrer" className="photo-page-link">Full</a></li>
                <li><a href={urlRegular} target="_blank" rel="noreferrer" className="photo-page-link">Regular</a></li>
                <li><a href={urlSmall} target="_blank" rel="noreferrer" className="photo-page-link">Small</a></li>
                <li><a href={urlThumb} target="_blank" rel="noreferrer" className="photo-page-link">Thumbnail</a></li>
                <li><a href={urlRaw} target="_blank" rel="noreferrer" className="photo-page-link">Raw</a></li>
                <li>Views: {photoViews}</li>
                <li>Description: {alt}</li>
                <li>Location: {photoLocation} </li>
            </li>
            <li ><strong><h3 className="info-section-title">Photographer</h3></strong>
            <li>Name: {photographerName}</li>
            <li><a href={photographerPortfolio} target="_blank" rel="noreferrer" className="photo-page-link">Portfolio</a> </li>
            <li><a href={photographerProfile} target="_blank" rel="noreferrer" className="photo-page-link">Unspalsh Profile</a></li>
            </li>
        </ul>
    </div>
    )
}

export default PhotoPage