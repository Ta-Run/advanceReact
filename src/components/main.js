import React, { useEffect, useState } from 'react'
// import SecMain from './secMain'

export function Main({ greet }) {
    const [name, letName] = useState('')

    useEffect(() => {
        letName(greet)
    }, []);

    // const imagesType =['nature','photograhy','advanture','tours'];

    // function imageCheck(mergeWith){
    //  imagesType.forEach(mergeWith);
    // };



    // function mergeWith(item){
    //     console.log(imagesType)
    // }

    return (
        <div style={{ background: 'lightpink' }}>
            <h1 style={{ color: 'red', paddingTop: '20px' }}>Props are immutable</h1>
            <p style={{ paddingTop: '20px' }}> main {greet}</p>
            <h1 style={{ paddingTop: '20px' }}>Eaxmple of state is mutable name is <span style={{ background: 'gray' }}>{name}</span></h1>
            {/* <SecMain mainState={name} /> */}
            <button style={{ background: 'orange' }} onClick={() => {
                letName('Good After Noon')
            }}>Changae greet</button>
        </div>
    )
}
export const ImageSlide = () => {
    const imgStatic = ['https://fastly.picsum.photos/id/866/536/354.jpg?hmac=tGofDTV7tl2rprappPzKFiZ9vDh5MKj39oa2D--gqhA',
        'https://fastly.picsum.photos/id/1084/536/354.jpg?grayscale&hmac=Ux7nzg19e1q35mlUVZjhCLxqkR30cC-CarVg-nlIf60'
    ]
    const [activeImg, setActiveImg] = useState(0);

    const handleNext = () => {
        setActiveImg((activeImg + 1) % imgStatic.length)
    };

    const handlePrev = () => {
        if (imgStatic.length <= 0) {
            setActiveImg(activeImg - 1)
        } else {
            setActiveImg(0)
        }
    };

    return (
        <div style={{ background: 'darkwhite' }}>
            <h2 style={{ background: 'lightblue' }}>Image Slide</h2>
            <button onClick={handlePrev}>Previous</button>
            <img src={imgStatic[activeImg]} alt='wallpaper' />
            <button onClick={handleNext}>Next</button>
        </div>
    )
}



