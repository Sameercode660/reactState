import "./Styles/Check.css";
import { useEffect, useState } from "react";

function Check({text}) {
  const [clicked, setClicked] = useState(false);
  const [border, setBorder] = useState('1px solid gray')
  const [logo, setLogo] = useState('fa-xmark')
  const [count, setCount] = useState(0)
  const [item, setItem] = useState([])

  useEffect(()=>{
    console.log(item)
  }, [item])

  function increment(i){
    setItem((preState)=>[preState, i])
    console.log(item)
    setCount(count + 1)
    
}
function decrement(i){
    setItem((preState)=>[...preState])
    console.log(item)
    setCount(count - 1)
  }
  function change(e)
  {
    e.stopPropagation()
    if(!clicked)
    {
        increment(e.target.innerText)
        setBorder('1px solid green')
        setLogo('fa-check')
        setClicked(!clicked)
    }
    else
    {
        decrement(e.target.innerText)
        setBorder('1px solid gray')
        setLogo('fa-xmark')
        setClicked(!clicked)
    }
  }
  return (
    <>
      <div className="container" style={{border : border}} onClick={change}>
        <div className="location-container">
          <i class={`fa-solid fa-location-pin`}></i>
        </div>

        <div className="heading-container">
          <span>{text}</span>
        </div>
        <div className="logo-xmark-container">
          <i class={`fa-solid ${logo}`}></i>
        </div>
      </div>
    </>
  );
}

export default Check;

// Check localStorage <i class="fa-solid fa-check"></i>
// x mark logo <i class="fa-solid fa-xmark"></i>
// point logo <i class="fa-solid fa-location-pin"></i>
