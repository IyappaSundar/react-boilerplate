/**
 * Created by Iyappa Sundar Natarajan on 12/3/2016.
 */

import React from "react";
import ReactDOM from "react-dom";

class ShoppingList extends React.Component {
    render() {
        return (
            <div className="shopping-list">
                <h1>Shopping List for {this.props.name}</h1>
                <ul>
                    <li>Instagram</li>
                    <li>WhatsApp</li>
                    <li>Oculus</li>
                </ul>
            </div>
        );
    }
}

ReactDOM.render(
    <ShoppingList name="Grocery"></ShoppingList>,
    document.getElementById('root')
);