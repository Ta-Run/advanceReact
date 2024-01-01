import { useEffect, useState, useMemo } from 'react';
import contextImg from './imgContext';

const ImageState = (props) => {
    const [imgs, setImages] = useState({});


    useEffect(() => {
        const fetchImgaApi = async () => {
            await fetch('https://dummyjson.com/products').then((res) =>
               res.json()
           ).then((res) => setImages(res.products))
       }
        fetchImgaApi();
    }, [])


    return (
        <contextImg.Provider value={{ imgs }}>
            {props.children}
        </contextImg.Provider>
    )
}

export default ImageState