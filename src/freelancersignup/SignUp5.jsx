import { Pencil } from 'lucide-react'
import { NavLink } from 'react-router-dom'
function SignUp5() {
    const gradientStyle = {
        background: 'linear-gradient(to bottom, white, #D7C192, #418B71)',
        minHeight: '100vh', // Ensures the gradient covers the full height of the viewport
    };

    return (
        <>
            <div style={gradientStyle}>
                <h1 className="pl-7 pt-7">5/5 <b className="ml-3">Freelancer Registration</b></h1>
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
                    <div className="bg-white w-full h-1/6 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">HOURLY RATE</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2 mb-10">
                            <div className=" w-4/5">
                                <h1 className="text-2xl">Hourly Rate:</h1>
                                <p>(Total amount the client will see.)</p>
                                <h1 className="text-2xl mt-8">Platform Service Fee:</h1>
                                <p>This fee supports platform services such as secure payments and customer support.</p>
                                <h1 className="text-2xl mt-8">Your Earnings:</h1>
                                <p>This is the estimated amount you’ll receive after service fees.</p>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-1/6 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">SKILLS AND EXPERIENCES</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2">
                            <div className=" w-4/5">
                                <h1 className="text-2xl">Skill Categories:</h1>
                                <h1 className="text-2xl mt-6">Primary Skills:</h1>
                                <h1 className="text-2xl mt-6">Experience Level:</h1>
                                <h1 className="text-2xl mt-6">Professional Description:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-1/6 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">WORK HISTORY</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2 mb-28">
                            <div className="grid gap-7 w-4/5">
                                <h1 className="text-2xl">Job Title:</h1>
                                <h1 className="text-2xl">Company Name:</h1>
                                <h1 className="text-2xl">Location:</h1>
                                <h1 className="text-2xl">Employment Type:</h1>
                                <h1 className="text-2xl">Start Date:</h1>
                                <h1 className="text-2xl">End Date/Present:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="bg-white w-full h-1/6 p-10 mt-10 rounded-md shadow-md">
                        <div className="flex justify-between mb-10 ">
                            <h1 className="text-[#142E52] text-3xl">EDUCATION</h1>
                            <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                        </div>
                        <div className="flex h-56 py-2 mb-20">
                            <div className="grid gap-7 w-4/5">
                                <h1 className="text-2xl">Institution Name:</h1>
                                <h1 className="text-2xl">Degree/Course:</h1>
                                <h1 className="text-2xl">Academic Achievement:</h1>
                                <h1 className="text-2xl">Start Date:</h1>
                                <h1 className="text-2xl">End Date/Present:</h1>
                            </div>
                        </div>
                    </div>
                    <div className="flex justify-between space-x-10">
                        <div className="bg-white w-full h-1/6 p-10 mt-10 rounded-md shadow-md">
                            <div className="flex justify-between mb-10 ">
                                <h1 className="text-[#142E52] text-3xl">LANGUAGE</h1>
                                <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                            </div>
                            <div className="flex h-56 py-2 ">
                                <div className="grid gap-7 w-4/5">
                                    <h1 className="text-2xl">Language:</h1>
                                    <h1 className="text-2xl">Proficiency Level:</h1>
                                </div>
                            </div>
                        </div>
                        <div className="bg-white w-full h-1/6 p-10 mt-10 rounded-md shadow-md">
                            <div className="flex justify-between mb-10 ">
                                <h1 className="text-[#142E52] text-3xl">PORTFOLIO</h1>
                                <button className="flex justify-center rounded-md w-28 py-2 bg-[#EF8F00] text-white"><Pencil size={20} className="mr-2"/>Edit</button>
                            </div>
                            <div className="flex h-56 py-2">
                                <div className="grid gap-7 w-4/5">
                                    <h1 className="text-2xl">Upload Links:</h1>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
                <div className="bg-[#00B676] h-1.5 rounded-full dark:bg-blue-500" style={{width: '100%'}}></div>
            </div>
            <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
                    <NavLink to="/signup-freelancer-4" className="bg-gray-300 text-black rounded-md px-10 py-2">
                    Back
                    </NavLink>
                    <NavLink to="/signup-success" className="bg-[#418B71] text-white rounded-md px-10 py-2">
                    Proceed: Account Ready
                    </NavLink>
            </div>
        </>
    );
}

export default SignUp5;