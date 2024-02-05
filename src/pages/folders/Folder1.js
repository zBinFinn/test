import React from "react";
import Header from "./components/Header";
import Image from "./components/Image";

export default function Folder1(){
    return (
        <>
            <Header folder="Ordner 1"/>
            <div className="folder">
                <Image path="https://picsum.photos/1600/900?random=1&grayscale"/>
                <Image path="https://picsum.photos/1600/900?random=2&grayscale"/>
                <Image path="https://picsum.photos/1600/900?random=3&grayscale"/>
                <Image path="https://picsum.photos/1600/900?random=4&grayscale"/>
                <Image path="https://picsum.photos/1600/900?random=5&grayscale"/>
                <Image path="https://picsum.photos/1600/900?random=6&grayscale"/>
            </div>
        </>


    )
}