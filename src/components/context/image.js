import { useEffect, useState, useMemo } from 'react';
import contextImg from './imgContext';

const ImageState = (props) => {
    const [imgs, setImages] = useState({});
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchImgaApi = async () => {
            await fetch('https://dummyjson.com/products').then((res) =>
                res.json()
            ).then((res) => {
                setImages(res.products);
                setLoading(false)
            }).catch((err) => console.log(err))
        }
        fetchImgaApi();
    }, [])

    return (
        <contextImg.Provider value={{ imgs, loading }}>
            {props.children}
        </contextImg.Provider>
    )
}

export default ImageState