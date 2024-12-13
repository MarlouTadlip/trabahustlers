import { NavLink } from 'react-router-dom';
import { Radio,FormControl,FormControlLabel } from '@mui/material';
import { Pencil,Trash2,SquarePlus } from 'lucide-react';

function SignUp5() {
  return (
    <>
      <div className="flex h-screen">        
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-10 pt-7">
            <h1 className="pb-10">5/8 <b className="ml-3">Client Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4 mt-1">Your Project Deliverables</h1>
            <p className="opacity-50 mb-6">Specify the key outputs you expect from this project to ensure clear expectations.</p>

            <h1 className="font-semibold text-lg mt-2">Deliverable Checklist:</h1>
            <p className="opacity-50 mb-6">Select up to 3 key deliverables that best represent your project’s needs.</p>
            <div className="mb-6">
                <FormControl>
                  <div className="w-full flex">
                    <div className="w-4/5">
                      <FormControlLabel control={<Radio/>} label="Logo Design" />
                      <p className="opacity-50 ml-8 text-sm mb-2">For large, ongoing projects (e.g., full product development)</p>
                    </div>
                    <div className="w-1/5">
                      <button className="bg-[#EF8F00] p-2 rounded-md text-white mr-2"><Pencil/></button>
                      <button className="border-2 border-[#6F6F6F] p-2 rounded-md text-[#6F6F6F]"><Trash2/></button>
                    </div>
                  </div>
                  <hr className="flex-grow border-t-2 m-3"></hr>
                  <div className="w-full flex">
                    <div className="w-4/5">
                      <FormControlLabel control={<Radio/>} label="Responsive Websites" />
                      <p className="opacity-50 ml-8 text-sm mb-2">Well-defined projects that take a few weeks of work (e.g., a feature launch or marketing campaign)</p>
                    </div>
                    <div className="w-1/5">
                      <button className="bg-[#EF8F00] p-2 rounded-md text-white mr-2"><Pencil/></button>
                      <button className="border-2 border-[#6F6F6F] p-2 rounded-md text-[#6F6F6F]"><Trash2/></button>
                    </div>
                  </div>
                  <hr className="flex-grow border-t-2 m-3"></hr>
                  <div className="w-full flex">
                    <div className="w-4/5">
                      <FormControlLabel control={<Radio/>} label="Content Articles" />
                      <p className="opacity-50 ml-8 text-sm mb-2">Quick tasks or sprints (e.g., bug fixes, small updates)</p>
                    </div>
                    <div className="w-1/5">
                      <button className="bg-[#EF8F00] p-2 rounded-md text-white mr-2"><Pencil/></button>
                      <button className="border-2 border-[#6F6F6F] p-2 rounded-md text-[#6F6F6F]"><Trash2/></button>
                    </div>
                  </div>
                </FormControl>   
                <button className="bg-[#EF8F00] p-3 rounded-md text-white mr-2 flex items-center font-sm mt-4"><SquarePlus size={20} className="mr-1"/>Add Deliverables to List</button>
                <h1 className="font-semibold text-lg mt-5">Need help defining your deliverables?</h1>
                <p className="opacity-50 mb-6 mt-2">To ensure your deliverables are clear to avoid misunderstandings.</p>  
            </div>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup4client.svg')" }}>
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full" style={{width: '75%'}}></div>
    </div>
    <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup-client-4" className="border-2 border-[#418B71] text-[#418B71] rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-client-6" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed: Your Budget
            </NavLink>
    </div>
    </>
  );
};

export default SignUp5;