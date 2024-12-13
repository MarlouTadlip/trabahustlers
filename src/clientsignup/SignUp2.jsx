import { NavLink } from 'react-router-dom';

function SignUp2() {
  return (
    <>
      <div className="flex h-screen">        
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-10 pt-7">
            <h1 className="pb-10">2/8 <b className="ml-3">Client Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4 mt-16">ABOUT THE PROJECT</h1>
            <p className="text-gray-600 mb-6">Post your project and connect with top talent.</p>

            <form>
                <div className="mb-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900 ">Write a title for your job post</label>
                        <input type="text" id="first_name" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 " placeholder="Enter First Name" required />
                        <p className="opacity-50 text-sm mt-2">Around 50-100 characters to keep titles concise.</p>
                    </div>
                </div>
            </form> 
            <p className="mb-4 mt-10 font-bold">
                EXAMPLE TITLES
            </p>
            <p className="w-5/6 text-[#262626] text-opacity-50 mb-4">
                Tell us about your education, experience, and skills. You can quickly import your information and edit it before your profile goes live.
            </p>
            <ul className="grid grid-cols-1 gap-5 list-disc p-5">
                <li>Build responsive WordPress site with booking/payment functionality.</li>
                <li>Graphic designer needed to design ad creative for multiple campaigns.</li>
                <li>Facebook ad specialist needed for product launch. </li>
            </ul>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup2client.svg')" }}>
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full" style={{width: '25%'}}></div>
    </div>
    <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup-client-1" className="border-2 border-[#418B71] text-[#418B71] rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-client-3" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed: Skills Required
            </NavLink>
    </div>
    </>
  );
};

export default SignUp2;