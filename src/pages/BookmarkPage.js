import { useContext } from "react";

import { Context } from "../Context.js";

function BookmarkPage() {
    let { photos, bookmarkedPhotos } = useContext(Context);
    return (
        <div>
            <p>bookmarked photos go here</p>
        </div>
    )
}

export default BookmarkPage