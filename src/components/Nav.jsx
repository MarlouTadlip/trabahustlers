import { NavLink, useNavigate } from 'react-router-dom';
import { Mail, BellDot } from 'lucide-react';

const Nav = () => {
    const navigate = useNavigate();

    // Function to handle dropdown navigation
    const handleDropdownChange = (event) => {
        const selectedValue = event.target.value;
        if (selectedValue) {
            navigate(selectedValue);
        }
    };

    return (
        <nav className="flex justify-between items-center p-4 bg-[#418B71] text-white h-28">
            <NavLink to="/dashboard">
                <div className="flex items-center p-5">
                    <span className="text-2xl font-bold">
                        T R A B A<span className="text-[#EF8F00]"> H U S T L E</span>
                    </span>
                </div>
            </NavLink>

            <div className="flex space-x-16">
                <NavLink to="/post-job" className="hover:text-gray-400">
                    Post a Job
                </NavLink>
                <NavLink to="/post-project" className="hover:text-gray-400">
                    Post a Project
                </NavLink>
                <select
                    onChange={handleDropdownChange}
                    className="bg-[#418B71] text-white border-none outline-none hover:cursor-pointer"
                >
                    <option value="" disabled selected>
                        Browse
                    </option>
                    <option value="/browse-jobs">Jobs</option>
                    <option value="/browse-projects">Projects</option>
                </select>
                <NavLink to="/my-work" className="hover:text-gray-400">
                    My Work
                </NavLink>
                <NavLink to="/finances" className="hover:text-gray-400">
                    Finances
                </NavLink>
            </div>

            <div className="flex space-x-8">
                <button>
                    <Mail />
                </button>
                <button>
                    <BellDot />
                </button>
                <div className="inline-block h-[50px] min-h-[1em] w-0.5 self-center bg-neutral-100 "></div>
                <img src="pp.svg" alt="Profile" className="w-10 h-10 rounded-full" />
            </div>
        </nav>
    );
};

export default Nav;
