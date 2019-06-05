import Component from '../Component.js';
import Header from '../shared/Header.js';

class FavoritesApp extends Component {
    
    render() {
        const dom = this.renderDOM();
        const main = dom.querySelector('main');

        const header = new Header();
        const headerDOM = header.render();
        dom.insertBefore(headerDOM, main);


        //TODO: implement loading some day?

        //this is Marty's code, we gotta figure this out



        return dom;
    }

    renderTemplate() {
        return /*html*/ ` 
            <div>
                <main>
                
                </main>    
            </div>
        `;
    }
}
export default FavoritesApp;