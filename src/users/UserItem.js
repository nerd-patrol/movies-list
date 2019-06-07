import Component from '../Component.js';

class UserItem extends Component {

    renderTemplate() {
        const user = this.props.user;
        return /*html*/ `
            <li>
                <a href="./favorites.html?uid=${user.uid}">${user.displayName}</a>
            </li>
        `;
    }
}

export default UserItem;