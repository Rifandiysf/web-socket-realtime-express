import { useEffect, useRef, useState } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import { fetchProfile } from "../redux/action/authAction"
import SideBar from "../components/SideBar"
import { CircleUser, ImageIcon, MessageCircle} from "lucide-react"


const Home = () => {
  const [value, setValue] = useState('');
  const profile = useSelector(root => root?.auth)
  const dispath = useDispatch()
  
  useEffect(() => {
    dispath(fetchProfile(profile?.token))
  },[])

  const fileInputRef = useRef(null);

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      console.log('Gambar dipilih:', file.name);
    }
  };

  return (
    <>
      <SideBar/>
      <section className="flex flex-col w-[600px] min-h-screen ml-[280px] border-2 border-[#202122] max-sm:mx-[10px] max-sm:mb-[80px]">
        <div className="w-full h-[153px] border-b-2 border-b-[#202122] flex justify-center items-center px-4">
          <div className="flex justify-center h-full pt-4 mr-2">
            <div className="flex items-center justify-center p-1 w-11 h-11 rounded-full border-2 border-slate-300">
              <CircleUser color="#ffffff" size={24} />
            </div>
          </div>
          <form className="w-full py-4">
            <input 
            type="text" 
            placeholder="How is today?"
            className={`w-full border-none outline-none bg-transparent text-xl font-bold placeholder:text-white ${value ? '' : 'text-white'} `}
            />
            <hr className="my-3 border-[.5px]"/>
            <div className="flex items-center justify-between h-16">
              <button
                type="button"
                onClick={handleClick}
                className="flex items-center justify-center gap-1 p-2 rounded-full text-[#1d98f0] hover:bg-[#1d98f075] transition-colors"
              >
                <ImageIcon size={18} />
                <p className="font-bold">Select Image</p>
              </button>
              <input
                type="file"
                accept="image/*"
                ref={fileInputRef}
                onChange={handleFileChange}
                className="hidden"
              />
              <button type='submit' className="flex justify-center items-center gap-2 mx-8 my-5 p-2 px-3 rounded-full text-black font-bold bg-white transition hover:bg-[#f0f4f9] max-sm:hidden"><span>Posting</span></button>
            </div>
          </form>
        </div>

        <div className="relative w-full border-b-2 border-b-[#202122] flex justify-center items-start px-4">
          <div className="relative flex justify-center h-full pt-4 mr-2">
            <div className="flex items-center justify-center p-1 w-11 h-11 rounded-full border-2 border-slate-300">
              <CircleUser color="#ffffff" size={24} />
            </div>
          </div>

          <div className="relative w-full py-4">
            <div className="flex flex-col justify-center gap-1">
              <h1 className="text-white font-semibold text-sm">Rifandi Yusuf <span className="text-gray-400 font-normal">@Rifandiysf · 3j</span></h1>
              <p className="text-white text-sm">
                Terimakasih For Today
              </p>
            </div>

            <div className="mt-3 flex items-center gap-6 text-gray-400 text-sm">
              <div className="flex items-center gap-1 hover:text-blue-400 transition-colors cursor-pointer">
                <MessageCircle size={16} />
                <span>41</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Home