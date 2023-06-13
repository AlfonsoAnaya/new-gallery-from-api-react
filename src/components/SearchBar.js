function SearchBar() {
    return (
        <div>
            <form class="form" id="form">
                <label><input id="query-input" type="text" placeholder="plants" /></label>
                <label>No. of photos <input id="query-number" type="number" placeholder="12" min="1" max="30" /></label>
                <button class="btn" type="submit">Search</button>
            </form>
        </div>
    )
}

export default SearchBar;