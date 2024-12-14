import { NavLink } from 'react-router-dom';
import { Clock,Receipt } from 'lucide-react'
function SignUp6() {
  return (
    <>
      <div className="flex h-screen">        
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-10 pt-7">
            <h1 className="pb-10">6/8 <b className="ml-3">Client Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4 mt-1">SET YOUR BUDGET</h1>
            <p className="opacity-50 mb-3">This will help us match you to talent within your range.</p>

            <h1 className="font-semibold text-lg mb-2">Billing Method</h1>
            <div className="flex justify-between mb-11">
                <div className="relative flex flex-col items-center bg-[#EF8F00] py-14 px-28 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition">
                  <Clock size={130} className="text-white mb-5" />
                  <h2 className="text-white text-lg font-semibold">Hourly Rate</h2>
                </div>

                <div className="relative flex flex-col items-center bg-[#418B71] py-14 px-28 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition">
                  <Receipt size={130} className="text-white mb-5" />
                  <h2 className="text-white text-lg font-semibold">Fixed Price</h2>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-5">
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">From</label>
                <div className="flex items-center">
                  <input type="text" id="from" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2" placeholder="Placeholder" required />
                  <h1>/hr</h1>
                </div>
              </div>
              <div>
                <label className="block mb-2 text-sm font-medium text-gray-900">To</label>
                <div className="flex items-center">
                  <input type="text" id="to" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 mr-2" placeholder="Placeholder" required />
                  <h1>/hr</h1>
                </div>
              </div>
            </div>
            <p className="opacity-50 mb-6 mt-6">This is the average rate for similar projects.</p>
            <p className="opacity-50 mb-6">Professionals tend to charge ₱150 - ₱500 /hour (USD) for video game development projects like yours.
            Experts may change higher rates.</p>
            <p className="cursor-pointer">Not ready to set an hourly rate?</p>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup6client.svg')" }}>
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full" style={{width: '87.5%'}}></div>
    </div>
    <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup-client-5" className="border-2 border-[#418B71] text-[#418B71] rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-client-7" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed: Additional Notes
            </NavLink>
    </div>
    </>
  );
};

export default SignUp6;