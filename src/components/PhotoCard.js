function PhotoCard({photographerName, urlSmall, urlThumb, alt, photoViews, photographerProfile}) {
    return (
        <div className="photo-card">
            <div className="image-container">
                <a target="_blank" rel="noreferrer" href={urlSmall}>
                    <img src={urlThumb} alt={alt}
                        className="image" />
                </a>
            </div>
            <figcaption>

                <p className="author">Photo by:
                    <a className="link" target="blank" href={photographerProfile}> {photographerName}</a>
                </p>

                <p className="views"> Views: {photoViews}</p>
            </figcaption >
        </div >
    )
}

export default PhotoCard