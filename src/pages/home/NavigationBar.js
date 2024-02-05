
import "./NavigationBar.css";
import "../../variables.css"

import React from "react";
export default function NavBar() {
    return (
        <header className="header">
            <Title/>
            <AnchorList />
        </header>
    );
}

function Title() {
    return (
        <div className="title">
            Placeholder
        </div>
    )
}

function Anchor({ target, description }) {
    return (
        <li className="anchor-list-item">
            <a className="anchor" href={"#" + target}>{description}</a>
        </li>
);
}


function AnchorList() {
    return (
        <nav className="nav-element">
            <ul className="anchor-list">
                <Anchor target="photos" description="Photos" />
                <Anchor target="contact" description="Contact" />
            </ul>
        </nav>
    )
}

