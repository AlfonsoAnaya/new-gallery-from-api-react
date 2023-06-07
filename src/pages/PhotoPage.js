function PhotoPage() {
    return (
        <div className="flex-container">
        <div className="img-container">
            <img src="https://images.unsplash.com/photo-1683488780112-f47a64de5d15?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3wxNDI0NzB8MHwxfHJhbmRvbXx8fHx8fHx8fDE2ODYxMjkyMDZ8&ixlib=rb-4.0.3&q=80&w=400" alt=""></img>
        </div>
        <ul className="photo-info">
            <li>Check Photo: 
                <li>Full urls.full</li>
                <li>Regular</li>
                <li>Small</li>
                <li>Thumbnail</li>
                <li>Raw</li>
            </li>
            <li>Description: alt_description</li>
            <li>Photographer: "user.name"</li>
            <li>Location: "user.bio"</li>
            <li>Portfolio: user.portfolio_url</li>
            <li>Unspalsh Profile: user.links.html</li>
        </ul>
    </div>
    )
}

export default PhotoPage