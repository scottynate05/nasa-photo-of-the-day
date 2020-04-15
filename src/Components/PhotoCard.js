import React from "react";

const PhotoCard = (props) => {
    const pic = props.pic;
    return (
        <div>
            <h1>NASA Photo of the Day</h1>
            <h2>{pic.title}</h2>
            <img src={pic.url} alt="Nasa Photo"/>
            <p>{pic.explanation}</p>          
        </div>
    )
}

export default PhotoCard;