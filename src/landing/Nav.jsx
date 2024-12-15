import { NavLink } from 'react-router-dom';
import Logo from '../components/Logo.jsx';
import { ChevronDown } from 'lucide-react';
const Navbar = () => {
    return (
        <nav className="flex justify-between items-center p-4 bg-[#418B5B] text-white h-28 z-20 relative">
            <Logo/>

            <div className="flex space-x-16">
                <NavLink to="/find-freelancers" className="hover:text-gray-400 flex items-center">Find Freelancers<ChevronDown className="ml-2"/></NavLink>
                <NavLink to="/find-work" className="hover:text-gray-400 flex items-center">Find Work<ChevronDown className="ml-2"/></NavLink>
                <NavLink to="/explore" className="hover:text-gray-400">Explore</NavLink>
                <NavLink to="/help-center" className="hover:text-gray-400">Help Center</NavLink>
            </div>

            <div className="flex space-x-10">
                <div className=" bg-white rounded-lg p-2">
                    <NavLink to="/login" className="hover:text-gray-400 text-black px-7 py-7">Login</NavLink>
                </div>
                <div className="bg-[#EF8F00] rounded-lg p-2">
                    <NavLink to="/signup" className="hover:text-gray-400 px-7 py-7">Sign Up</NavLink>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;