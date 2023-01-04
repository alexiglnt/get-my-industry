import '../../styles/Searchbar.module.css'

function Searchbar() {
    return (
        <form action="" className="search-bar">
            <input type="search" name="search" pattern=".*\S.*" required></input>
            <button className="search-btn" type="submit">
                <span>Search</span>
            </button>
        </form>
    );
}

export default Searchbar;