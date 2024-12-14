import { NavLink } from 'react-router-dom';

function SignUp7() {
  return (
    <>
      <div className="flex h-screen">        
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-20 pt-7">
            <h1 className="pb-10">7/8 <b className="ml-3">Client Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4 mt-1">PROVIDE ADDITIONAL NOTES</h1>
            <p className="text-gray-600 mb-4">Include any extra details or special instructions to help freelancers better understand your project.</p>

            <p className="mb-2 font-bold">
            Start the conversation:
            </p>
            <ul className="grid grid-cols-1 list-disc px-5 py-1">
                <li>Clear expectations about your task or deliverables</li>
                <li>The skills required for your work</li>
                <li>Good Communication </li>
                <li>Details about how you or your team like to work </li>
            </ul>
            <p className="mt-2">
            Describe what you need:
            </p>
            <textarea className="mt-3 peer h-6 min-h-[80px] w-full resize-none rounded-[7px] border border-black border-opacity-50  px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-gray-900 focus:outline-0 disabled:resize-none disabled:border-0 disabled:bg-blue-gray-50" placeholder="Already have a description? Paste it here..."></textarea>
            <div className="flex items-center justify-center">
              <hr className="flex-grow border-t-2 border-gray-300" />
              <span className="mx-4 text-gray-600">or</span>
              <hr className="flex-grow border-t-2 border-gray-300" />
            </div>
            <p className="mb-2">
            Need help?
            </p>
            <img src="uploadresume.svg" className="h-50 mb-2"></img>
            <p>See examples of effective descriptions</p>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup7client.svg')" }}>
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full" style={{width: '25%'}}></div>
    </div>
    <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup-client-6" className="border-2 border-[#418B71] text-[#418B71] rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-client-8" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed: Preview Profile
            </NavLink>
    </div>
    </>
  );
};

export default SignUp7;