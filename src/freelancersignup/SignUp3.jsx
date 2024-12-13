import { SquarePlus,Info } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function SignUp3(){
    return(
        <>
        <div>
            <h1 className="pl-7 pt-7">3/5 <b className="ml-3">Freelancer Registration</b></h1>
        </div>

        <div className="pl-16 pr-16 pt-10 pb-28">
            <h1 className="text-4xl mb-3">FILL IN RESUME</h1>
            <p className="opacity-50"> Provide key details about your work experience, education, and achievements to showcase your professional background.</p>
            <br></br>

            <div className="my-5">
                <h1 className="text-2xl mb-3">Professional</h1>
                <div className="border-2 border-black opacity-50 mb-4"></div>

                <label>Background</label>
                <textarea className="mt-3 peer h-full min-h-[120px] w-full resize-none rounded-[7px] border border-black border-opacity-50  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" placeholder="Write a brief summary about your professional background (e.g., experience, special achievements)"></textarea>
            </div>

            <div className="my-5"> 
                <h1 className="text-2xl mb-3">Work History</h1>
                <div className="border-2 border-black opacity-50 mb-4"></div>
                <form>
                    <div className="grid gap-x-10 gap-y-5 md:grid-cols-3">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Job Title</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Company Name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Location</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Employment Type</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Start Date</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">End Date/ Present</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                    </div>
                    <button className="flex justify-center rounded-md px-3 py-2 mt-3 bg-[#EF8F00] text-white"><SquarePlus className="mr-2"/>Add Another Work Experience</button>
                </form>
            </div>

            <div className="my-5">
                <h1 className="text-2xl mb-3">Education</h1>
                <div className="border-2 border-black opacity-50 mb-4"></div>

                <form>
                    <div className="grid gap-x-10 gap-y-5 md:grid-cols-3">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Institution Name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Degree/Course</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Academic Achievements</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Start Year</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">End Year</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                    </div>
                    <button className="flex justify-center rounded-md w-72 py-2 mt-3 bg-[#EF8F00] text-white"><SquarePlus className="mr-2"/>Add Another Education Entry</button>
                </form>
            </div>

            <div className="my-5">
                <h1 className="text-2xl mb-3">Certifications & Licenses</h1>
                <div className="border-2 border-black opacity-50 mb-4"></div>

                <form>
                    <div className="grid gap-x-10 gap-y-5 md:grid-cols-2 w-auto">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Certification Name</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Issuing Organization</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Issue Date</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Expiration Date</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                    </div>
                    <button className="flex justify-center rounded-md w-72 py-2 mt-3 bg-[#EF8F00] text-white"><SquarePlus className="mr-2"/>Add Another Certificate</button>
                </form>
            </div>

            <div className="my-5">
                <h1 className="text-2xl mb-3">Languages</h1>
                <div className="border-2 border-black opacity-50 mb-4"></div>

                <form>
                    <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Language</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Proficiency Level</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                    </div>
                    <button className="flex justify-center rounded-md w-72 py-2 mt-3 bg-[#EF8F00] text-white"><SquarePlus className="mr-2"/>Add Another Lanuage</button>
                </form>
            </div>

            <div className="my-5">
                <h1 className="text-2xl mb-3">Portfolio/Work Samples</h1>
                <div className="border-2 border-black opacity-50 mb-4"></div>

                <form>
                    <div className="grid gap-x-10 gap-y-5 md:grid-cols-2">
                        <div>
                            <label className="block mb-2 text-sm font-medium text-gray-900 ">Upload Links</label>
                            <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5     " placeholder="Placeholder" required />
                        </div>
                    </div>
                </form>
            </div>
            <h1 className="text-red-600 flex justify-content"><Info className="mr-2"/>Attach files or provide links to examples of your work.</h1>
        </div>

        <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 ">
            <div className="bg-[#00B676] h-1.5 rounded-full dark:bg-blue-500" style={{width: '60%'}}></div>
        </div>

        <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup-freelancer-2" className="bg-gray-300 text-black rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-freelancer-4" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed: Hourly Rate
            </NavLink>
        </div>
        </>
    );

}
export default SignUp3