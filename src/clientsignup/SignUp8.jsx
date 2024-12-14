import { Pencil } from 'lucide-react'
import { NavLink } from 'react-router-dom'
function SignUp8() {
    const gradientStyle = {
        background: 'linear-gradient(to bottom, white, #D7C192, #418B71)',
        minHeight: '100vh', // Ensures the gradient covers the full height of the viewport
    };

    return (
        <>
            <div style={gradientStyle}>
                <h1 className="pl-7 pt-7">8/8 <b className="ml-3">Client Registration</b></h1>
                <div className="p-20">
                    <h1 className="text-4xl font-bold mb-4">PREVIEW PROFILE</h1>
                    <p>Feel free to make any final edits before submitting. Once live, you’ll be able to update your profile anytime.</p>
                    <div className="bg-white w-full h-1/6 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10">
                            <h1 className="text-[#142E52] text-3xl">BASIC INFORMATION</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-80">
                            <div className="w-1/5 p-28">
                                <img src="Icon.png" alt="profile-pic"></img>
                            </div>
                            <div className="border-l border-black h-full"></div>
                            <div className="grid gap-4 w-4/5 p-5">
                                <label className="text-2xl">First Name:</label>
                                <label className="text-2xl">Last Name:</label>
                                <label className="text-2xl">Email Address:</label>
                                <label className="text-2xl">Phone Number:</label>
                                <label className="text-2xl">City:</label>
                                <label className="text-2xl">Country:</label>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-60 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">ABOUT THE PROJECT</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2 mb-5">
                            <div className=" w-4/5">
                                <h1 className="text-2xl">Project Title:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-60 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">SKILLS REQUIREMENTS</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2">
                            <div className=" w-4/5">
                                <h1 className="text-2xl">Skills Selected:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-53 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10">
                            <h1 className="text-[#142E52] text-3xl">PROJECT SCOPE AND DURATION</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-36 py-2 ">
                            <div className="grid w-4/5">
                                <h1 className="text-2xl">Project Scope:</h1>
                                <h1 className="text-2xl">Project Duration:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-60 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">PROJECT DELIVERABLES</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2 mb-5">
                            <div className=" w-4/5">
                                <h1 className="text-2xl">Deliverable Checklist:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-62 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 pb-2">
                            <h1 className="text-[#142E52] text-3xl">BUDGET</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-48 py-2">
                            <div className=" grid gap-2 w-4/5">
                                <h1 className="text-2xl">Billing Method:</h1>
                                <h1 className="text-2xl">From:</h1>
                                <h1 className="text-2xl">To:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-60 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">ADDITIONAL NOTES</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2 mb-5">
                            <div className=" w-4/5">
                                <h1 className="text-2xl">Project Needs:</h1>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-[#00B676] h-1.5 rounded-full " style={{width: '100%'}}></div>
            </div>
            <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
                    <NavLink to="/signup-client-7" className="bg-gray-300 text-black rounded-md px-10 py-2">
                    Back
                    </NavLink>
                    <NavLink to="/signup-success" className="bg-[#418B71] text-white rounded-md px-10 py-2">
                    Proceed: Account Ready
                    </NavLink>
            </div>
        </>
    );
}

export default SignUp8;