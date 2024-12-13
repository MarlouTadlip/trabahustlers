import { NavLink } from 'react-router-dom';
import { Info } from 'lucide-react'
function ImportLinkedIn() {
    return(
        <div className="flex flex-col items-center text-center p-12">
            <h1 className="font-bold text-3xl mb-10" >IMPORTING YOUR PROFILE DATA</h1>
            <p>We're fetching your information from LinkedIn. This may take a few moments</p>
            <img src="importlinkedin.svg" className=" mb-8 scale-100 mt-10"></img>
            <p className="text-red-500 mb-3 flex justify-center"><Info className="mr-2"/>Please don’t close this window while we complete the import.</p>
            <p className="opacity-50">Once the import is complete, you’ll have the opportunity to review and edit your information before finalizing your profile</p>
            <NavLink to="/signup-2" className="px-20 py-3 bg-[#DD5D5D] text-white rounded-md text-center mt-10 mb-3">Cancel</NavLink>
            <p><span className="opacity-50">Having trouble? </span><b>Click here for help</b></p>
        </div>

    );
}
export default ImportLinkedIn