import Component from '../Component.js';

class Search extends Component {

    renderTemplate() {
        return /*html*/`
            <form>
            <input name="search">
            <button>Search</button> 
            </form>
        `;
    }
}

export default Search;