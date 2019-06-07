import Component from '../Component.js';

class Search extends Component {

    render() {
        const form = this.renderDOM();
        const input = form.querySelector('input');

        form.addEventListener('submit', event => {
            event.preventDefault();
            const searchParams = new URLSearchParams();
            searchParams.set('query', input.value);
            window.location.hash = searchParams.toString();
        });

        function setInputFromHash() {
            const params = window.location.hash.slice(1);
            const searchParams = new URLSearchParams(params);
            const search = searchParams.get('query');
            input.value = search;
        }

        setInputFromHash();

        window.addEventListener('hashchange', () => {
            setInputFromHash();
        });


        return form;
    }

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