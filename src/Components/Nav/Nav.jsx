import React,{useState} from 'react'
import { Moon } from 'lucide-react';
import '../../App.css'
function Nav() {
    const[BackGround,SetBackGround] = useState(false)

    const BackGroundChange = ()=>{
        SetBackGround(!BackGround)}

        // onClick={BackGroundChange}  ${BackGround? "bg-lightBG": "bg-DarkBG"}
  return (
    <div className={`flex justify-evenly items-center py-[28px] `}>
        {/* logo */}
        {/* <div className="font-medium flex"> */}
        <span className="text-3xl font-medium nexc ">Yoga</span>
        <ul className="flex gap-10 *:hidden *:sm:inline-block text-xl">
            <li><a href="/">Home</a></li>
            <li><a href="#">Health</a></li>
            <li><a href="#">Rouline</a></li>
            <li><a href="#">Follow</a></li>
            
        </ul>
        {/* </div> */}
        {/* Light and Dark btn  */}
        <button className='inline-block md:hidden'  > <Moon/></button>
    </div>
  )
}

export default Nav