import { NavLink } from 'react-router-dom';
import { Radio,FormControl,FormControlLabel } from '@mui/material';

function SignUp4() {
  return (
    <>
      <div className="flex h-screen">        
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-10 pt-7">
            <h1 className="pb-10">4/8 <b className="ml-3">Client Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4 mt-1">SCOPE OF YOUR PROJECT</h1>
            <p className="text-gray-600 mb-6">Post your project and connect with top talent.</p>

            <h1 className="font-semibold text-lg mt-2">Estimate Your Project Scope</h1>
            <div className="mb-6">
                <FormControl>
                  <FormControlLabel control={<Radio/>} label="Large" />
                  <p className="opacity-50 ml-8 text-sm mb-2">Complex and long-term projects (e.g., full website design and development, custom software)</p>
                  <FormControlLabel control={<Radio/>} label="Medium"/>
                  <p className="opacity-50 ml-8 text-sm mb-2">Defined tasks that require a few weeks to complete (e.g., landing page, marketing materials)</p>
                  <FormControlLabel control={<Radio/>} label="Small"/>
                  <p className="opacity-50 ml-8 text-sm">Quick and simple tasks (e.g., editing a blog post, updating content)</p>
                </FormControl>
            </div>
            <h1 className="font-semibold text-lg mt-2">How long will your work take?</h1>
            <div className="mb-6">
                <FormControl>
                  <FormControlLabel control={<Radio/>} label="3 to 6 months" />
                  <p className="opacity-50 ml-8 text-sm mb-2">For large, ongoing projects (e.g., full product development)</p>
                  <FormControlLabel control={<Radio/>} label="1 to 3 months"/>
                  <p className="opacity-50 ml-8 text-sm mb-2">Well-defined projects that take a few weeks of work (e.g., a feature launch or marketing campaign)</p>
                  <FormControlLabel control={<Radio/>} label="Less than one month"/>
                  <p className="opacity-50 ml-8 text-sm">Quick tasks or sprints (e.g., bug fixes, small updates)</p>
                </FormControl>
            </div>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup4client.svg')" }}>
        </div>
      </div>
    <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full" style={{width: '62.5%'}}></div>
    </div>
    <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
            <NavLink to="/signup-client-3" className="border-2 border-[#418B71] text-[#418B71] rounded-md px-10 py-2">
              Back
            </NavLink>
            <NavLink to="/signup-client-5" className="bg-[#418B71] text-white rounded-md px-10 py-2">
              Proceed: Deliverables
            </NavLink>
    </div>
    </>
  );
};

export default SignUp4;