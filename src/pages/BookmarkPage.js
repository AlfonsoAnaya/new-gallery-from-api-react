import { useContext } from "react";

import { Context } from "../Context.js";

function BookmarkPage() {
    let { photos, bookmarkedPhotos } = useContext(Context);
    return (
        <div>
            <p>bookmarked photos go here</p>
            {photos[0]}
        </div>
    )
}

export default BookmarkPage