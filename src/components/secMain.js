import React, { useContext, useRef } from 'react'
import contextImg from './context/imgContext'

function SecMain(props) {
  let inputRef = useRef(null);

  const contextImages = useContext(contextImg);
  console.log(contextImages);


  const handleSearch = () => {
    inputRef.current.value = 'Iphone';
    inputRef.current.focus();
    inputRef.current.style.color='blue';
  }

  return (
    <div>
      <p> After set state props will be change {props.mainState}</p>
      <div>
        <input type='text' placeholder='Search Images' ref={inputRef} />
        <button onClick={handleSearch}>Searach Images</button>
      </div>
      {/* {contextImages &&
        contextImages.imgs.map((img) => {
          console.log(img.thumbnail)
          return (
            <>
              < img src={img.thumbnail} alt='natural' style={{ height: '30%', width: '40%' }} />
            </>
          )
        })
      } */}
      <button>
        Buy
      </button>
    </div>
  )
}

export default SecMain