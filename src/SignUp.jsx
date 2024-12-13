import { NavLink } from 'react-router-dom';
import { Briefcase, IdCard } from 'lucide-react'; // Importing icons from lucide-react

function SignUp() {
  return (
    <div className="flex h-screen">
      {/* Left Image Section */}
      <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup1.svg')" }}>
      </div>


      <div className="w-1/2 flex flex-col bg-white p-8 ">
        <h1 className="text-4xl font-bold mb-4">SELECT ACCOUNT TYPE</h1>
        <p className="text-gray-600 mb-10">Select whether you’re a freelancer looking to showcase your skills or a client seeking talented professionals.</p>

        <div className="flex justify-center space-x-10 mb-11">

          <div className="relative flex flex-col items-center bg-[#EF8F00] p-20 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition">
            <IdCard size={100} className="text-white mb-2" />
            <h2 className="text-white text-lg font-semibold">Employer</h2>
            <p className="text-white">(I want to Hire)</p>
          </div>

          <div className="relative flex flex-col items-center bg-[#418B71] p-20 rounded-lg shadow-md cursor-pointer hover:bg-gray-200 transition">
            <Briefcase size={100} className="text-white mb-2" />
            <h2 className="text-white text-lg font-semibold">Freelancer</h2>
            <p className="text-white">(I am looking for Work)</p>
          </div>
        </div>

        <NavLink to="/signup-freelancer-1" className="text-center"><button className="bg-[#418B71] text-white rounded-md px-20 py-4 mb-4">
          Proceed
        </button></NavLink>

        <p className="text-sm text-gray-600 text-center">
          Already have an account? <NavLink to="/login" className="text-blue-500">Login</NavLink>
        </p>
      </div>
    </div>
  );
};

export default SignUp;