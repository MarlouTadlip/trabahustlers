import { NavLink } from 'react-router-dom';
import { Linkedin,FileUser,Pencil } from 'lucide-react'; 

function SignUp2() {
  return (
    <>
      <div className="flex h-full">        
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-10 pt-7">
            <h1 className="pb-10">2/5 <b className="ml-3">Freelancer Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4">ABOUT YOUR SKILLS</h1>
            <p className="text-gray-600 mb-6">Share your expertise and portfolio to connect with clients.</p>

            <form>
                <div className="grid gap-6 mb-6 md:grid-cols-1">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Skill Categories</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter First Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Primary Skill</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter First Name" required />
                    </div>
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Experience Level</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter First Name" required />
                    </div>
                </div>
            </form> 
            <p className="mb-4">
                How would you like to share your background?
            </p>
            <p className="w-5/6 text-[#262626] text-opacity-50 mb-4">
                Tell us about your education, experience, and skills. You can quickly import your information and edit it before your profile goes live.
            </p>
            <NavLink to="/import-linkedin" className=" flex px-4 py-2 bg-[#418B71] text-white rounded-md justify-center items-center mb-3 shadow-lg">
                <Linkedin size={20} className="mr-2"/>Import from LinkedIn
            </NavLink>
            <NavLink to="/upload-resume" className=" flex px-4 py-2 bg-[#EF8F00] text-white rounded-md justify-center items-center mb-3 shadow-lg">
                <FileUser size={20} className="mr-2"/>Upload your Resume
            </NavLink>
            <NavLink to="/signup-freelancer-3" className=" flex px-4 py-2 bg-white text-[#6F6F6F] border-solid border-2 border-[#6F6F6F] rounded-md justify-center items-center mb-3 shadow-lg">
                <Pencil size={20} className="mr-2"/>Fill in a Resume
            </NavLink>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup3.svg')" }}>
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full dark:bg-blue-500" style={{width: '40%'}}></div>
    </div>
    <div className="flex  mt-8 pl-7 pb-7">
            <NavLink to="/signup-freelancer-1" className="bg-gray-300 text-black rounded-md px-10 py-2">
              Back
            </NavLink>
    </div>
    </>
  );
};

export default SignUp2;