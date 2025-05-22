import { NavLink } from "react-router-dom"

const ButtonNav = (props) => {
    const {path, children} = props;
    return (
        <NavLink to={path} className={({ isActive }) => `flex items-center gap-8 text-xl font-semibold px-8 py-3 text-white transition ${ isActive ? "bg-[#202122]" : "hover:bg-[#202122] hover:text-[#1d98f0]" }  max-sm:p-6`}>
            {children}
        </NavLink>
    )
}

export default ButtonNav