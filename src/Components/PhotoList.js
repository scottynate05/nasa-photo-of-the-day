import React, { useEffect, useState } from "react";
import axios from "axios"
import PhotoCard from "./PhotoCard"

const PhotoList = () => {
    const [pic, setPic] = useState([]);
    useEffect(() => {
        axios
            .get("https://api.nasa.gov/planetary/apod?api_key=YMt7efMfeJo8SZGJUMi3TLU6SsdcaD42cnA2a8Jt")
            .then((response) => {
                console.log(response.data)
                setPic(response.data)
            })
            .catch((error) => {
                console.log(error)
            })
    }, [])
    return (
        <div>
            <PhotoCard pic={pic} />
        </div>
    )
};

export default PhotoList;