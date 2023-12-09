import './Carousel.scss'
import img1 from '../../img/img1.png'
import img2 from '../../img/img2.png'
import { useState } from 'react'

const arrImg =[img1,img2]
export default function Carousel() {
const [count,setCount] = useState(0)

function handlePrev(){
    if(count == 0) {
        setCount(arrImg.length)
        return
    }
    setCount((prevCount) => prevCount - 1)
}
function handleNext(){
    if(count === arrImg.length - 1) {
        setCount(0)
        return
    }
    setCount((prevCount) => prevCount + 1)
}
  return (
    <div className="carousel-position">
    <button onClick={handlePrev} className='carousel-btn'>P</button>
    <img src={arrImg[count]} alt="" className='carousel-img' />
    <button onClick={handleNext} className='carousel-btn' >N</button>
    </div>
  )
}
