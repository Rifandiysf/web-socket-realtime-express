import { Home, MessageSquareMore } from "lucide-react"
import ButtonNav from "./ButtonNav"
import { Link } from "react-router-dom"


const SideBar = () => {
  return (
    <aside className="flex flex-col justify-between w-[280px] h-dvh fixed left-0 top-0 z-50 bg-black shadow-lg max-sm:w-screen max-sm:h-[70px] max-sm:top-[91%]">
        <div className="flex flex-col gap-12 max-sm:flex-row max-sm:justify-center max-sm:items-center">
            <h1 className="flex justify-center items-center text-2xl font-extrabold text-white mt-[33px] max-sm:hidden"><span>LOGO</span></h1>
            <nav className="flex flex-col max-sm:flex-row">
                <ButtonNav path="/"><Home size={26}/><span className="max-sm:hidden">Home</span></ButtonNav>
                <ButtonNav path="/chat"><MessageSquareMore size={26}/><span className="max-sm:hidden">Chat</span></ButtonNav>           
            </nav>
        </div>
        <div className="flex flex-col max-sm:hidden">
            <Link to={''} className="flex justify-center items-center gap-2 mx-8 my-5 py-1.5 rounded-lg text-black font-bold bg-white transition hover:bg-[#f0f4f9] max-sm:hidden"><span>Posting</span></Link>
        </div>
    </aside>
  )
}

export default SideBar