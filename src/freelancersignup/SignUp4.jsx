import { NavLink } from 'react-router-dom';

function SignUp4() {
  return (
    <>
      <div className="flex h-screen">  
        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup4.svg')" }}>
        </div>      
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-10 pt-7">
            <h1 className="pb-10">4/5 <b className="ml-3">Freelancer Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4">SET YOUR HOURLY RATE</h1>
            <p className="text-gray-600 mb-20">Establish a competitive rate that reflects your skills and experience.</p>

            <form>
                <div className="grid gap-10 mb-6 md:grid-cols-2">
                    <div>
                        <h1 className="text-2xl font-semibold">Hourly Rate</h1>
                        <p>Total amount the client will see.</p>
                    </div>
                    <div className="flex max-h-10">
                        <input type="text" id="first_name" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Placeholder" required />
                        <p> /hr</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Platform Service Fee</h1>
                        <p>This fee supports platform services such as secure payments and customer support.</p>
                    </div>
                    <div className="flex max-h-10">
                        <input type="text" id="first_name" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Placeholder" required />
                        <p> /hr</p>
                    </div>
                    <div>
                        <h1 className="text-2xl font-semibold">Your Earnings</h1>
                        <p>This is the estimated amount you’ll receive after service fees.</p>
                    </div>
                    <div className="flex max-h-10">
                        <input type="text" id="first_name" className="mr-3 bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Placeholder" required />
                        <p> /hr</p>
                    </div>
                </div>
            </form> 
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full dark:bg-blue-500" style={{width: '80%'}}></div>
    </div>
    <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup-freelancer-3" className="bg-gray-300 text-black rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-freelancer-5" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed: Preview
            </NavLink>
    </div>
    </>
  );
};

export default SignUp4;