import React, { useContext, useRef } from 'react'
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
        contextImages.imgs.map((img, index) => {
          // console.log(img.description)
          return (
            <div key={index} className='flex justify-center  bg-fuchsia-400' >

                <div>
                  <div>
                    < img src={img.thumbnail} alt='natural' />
                  < div className='box-border h-32 w-52 p-4 border-4 '>
                    <p>{img.description.substring(0,15)}</p>
               <button>
               Buy
             </button>
             </div>
                  </div>
                </div>





            </div>

          )
        })
      }
    </div>
  )
}

export default SecMain