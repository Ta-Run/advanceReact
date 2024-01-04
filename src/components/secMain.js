import React, { useContext, useRef} from 'react'
import contextImg from './context/imgContext'

function SecMain(props) {
  let inputRef = useRef(null);
  const contextImages = useContext(contextImg);
  const handleSearch = () => {
    inputRef.current.value = 'Iphone';
    inputRef.current.focus();
    inputRef.current.style.color = 'blue';
  }
  if (contextImages.loading) return <h1>loading</h1>
  return (
    <div>
      <p> After set state props will be change {props.mainState}</p>
      <div>
        <input type='text' placeholder='Search Images' ref={inputRef} />
        <button onClick={handleSearch}>Searach Images</button>
      </div>
      {contextImages &&
        contextImages.imgs.map((img,index) => {
          // console.log(img.description)
          return (
            <div style={{ display: 'flex' }} key={index}>
              <div >
                < img src={img.thumbnail}   lalt='natural' style={{ justifyContent: 'flex-start' }} />
              </div>
              <div style={{background:'yellow'}}>
                <button>
                  Buy
                </button>
                <p>{img.description}</p>
              </div>
            </div>
          )
        })
      }
    </div>
  )
}

export default SecMain