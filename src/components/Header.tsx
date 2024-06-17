import { AiFillHome } from "react-icons/ai"
import {AiOutlineInfoCircle} from "react-icons/ai"
import MenuItems from "./MenuItems"
import Link from "next/link"
import DarkModeSwitch from "./DarkModeSwitch"

export default function Header() {
  return (
    <div className="flex justify-between items-center p-3 max-w-6xl mx-auto">
      <div className="flex gap-4">
        <MenuItems title="home" address="/" Icon={AiFillHome}/>
        <MenuItems title="about" address="/about" Icon={AiOutlineInfoCircle}/>
      </div>
      <div className="flex items-center gap-4">
        <DarkModeSwitch/>
        <Link href={'/'} className="text-2xl font-bold bg-amber-500 py1 px2 rounded-lg">Pixel</Link>
        <span className="text-xl hidden sm:inline">test</span>

      </div></div>
    
  )
}
