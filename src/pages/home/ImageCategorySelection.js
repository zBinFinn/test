import "./ImageCategorySelection.css"
import React from "react";

export default function ImageCategories() {

    return (
        <div className="image-categories-grid">
            <div className="image-category-title">Photos</div>

            <div className="image-category-wrapper">
                <img className="image-category" src="https://picsum.photos/520/520?grayscale" onClick = {
                    () => goTo({path: "#folder-1"})
                }/>
                <img className="image-category" src="https://placehold.co/520x520" onClick = {
                    () => goTo({path: "#folder-1"})
                }/>
                <img className="image-category" src="https://placehold.co/520x520" onClick = {
                    () => goTo({path: "#folder-1"})
                }/>
                <img className="image-category" src="https://placehold.co/520x520" onClick = {
                    () => goTo({path: "#folder-1"})
                }/>
                <img className="image-category" src="https://placehold.co/520x520" onClick = {
                    () => goTo({path: "#folder-1"})
                }/>
                <img className="image-category" src="https://placehold.co/520x520" onClick = {
                    () => goTo({path: "#folder-1"})
                }/>
            </div>
        </div>
    )
}

function goTo({ path }) {
    window.document.location.assign(path);
}