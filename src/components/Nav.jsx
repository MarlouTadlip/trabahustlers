import { NavLink } from "react-router-dom";
import { Mail, BellDot, ChevronDown } from "lucide-react";
import { useState } from "react";

const Nav = () => {
    const [openDropdown, setOpenDropdown] = useState(null);

    const toggleDropdown = (dropdown) => {
        setOpenDropdown((prev) => (prev === dropdown ? null : dropdown));
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

                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("browse")}
                        className="hover:text-gray-400 flex items-center"
                    >
                        Browse <ChevronDown className="ml-2" />
                    </button>
                    {openDropdown === "browse" && (
                        <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg z-20">
                            <NavLink
                                to="/browse/jobs"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                Jobs
                            </NavLink>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/browse/talents"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                Talents
                            </NavLink>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/browse/projects"
                                className="block px-4 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                Projects
                            </NavLink>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("myWork")}
                        className="hover:text-gray-400 flex items-center"
                    >
                        My Work <ChevronDown className="ml-2" />
                    </button>
                    {openDropdown === "myWork" && (
                        <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg z-20">
                            <button
                                className="block pr-20 pl-4 py-2 cursor-default font-bold"
                                onClick={(e) => e.preventDefault()}
                            >
                                Freelancer
                            </button>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                Proposals
                            </NavLink>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                Manage Projects
                            </NavLink>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                My Projects
                            </NavLink>
                            <hr className="border-2"></hr>
                            <button
                                className="block pr-10 pl-4 py-2 cursor-default font-bold"
                                onClick={(e) => e.preventDefault()}
                            >
                                Client
                            </button>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                Invitations
                            </NavLink>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                Manage Jobs
                            </NavLink>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 mb-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                My Jobs
                            </NavLink>
                        </div>
                    )}
                </div>

                <div className="relative">
                    <button
                        onClick={() => toggleDropdown("finances")}
                        className="hover:text-gray-400 flex items-center"
                    >
                        Finances <ChevronDown className="ml-2" />
                    </button>
                    {openDropdown === "finances" && (
                        <div className="absolute mt-2 bg-white text-black rounded-md shadow-lg z-20">
                            <button
                                className="block pr-24 pl-4 py-2 cursor-default font-bold"
                                onClick={(e) => e.preventDefault()}
                            >
                                Freelancer
                            </button>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 mb-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                My Earnings
                            </NavLink>
                            <hr className="border-2"></hr>
                            <button
                                className="block pr-20 pl-4 py-2 cursor-default font-bold"
                                onClick={(e) => e.preventDefault()}
                            >
                                Client
                            </button>
                            <hr className="border-2"></hr>
                            <NavLink
                                to="/my-work/task2"
                                className="block pr-10 pl-7 py-2 mb-2 hover:bg-gray-100"
                                onClick={() => setOpenDropdown(null)}
                            >
                                My Transactions
                            </NavLink>
                        </div>
                    )}
                </div>
            </div>

            <div className="flex space-x-8">
                <button>
                    <Mail />
                </button>
                <button>
                    <BellDot />
                </button>
                <div className="inline-block h-[50px] min-h-[1em] w-0.5 self-center bg-neutral-100"></div>
                <img src="pp.svg" alt="profile" />
            </div>
        </nav>
    );
};

export default Nav;
