import { NavLink } from 'react-router-dom';
import { CircleCheck } from 'lucide-react'
function LinkedInSuccess() {
    return(
        <div className="flex flex-col items-center text-center p-12">
            <h1 className="font-bold text-3xl mb-10" >PROFILE DATA IMPORTED SUCCESSFULLY!</h1>
            <p>You're all set to review and enhance your profile from LinkedIn. </p>
            <img src="importlinkedin.svg" className=" mb-8 scale-100 mt-10"></img>
            <p className="text-green-600 mb-3 flex justify-center"><CircleCheck className="mr-2"/>We’ve successfully imported your profile data from LinkedIn</p>
            <p className="opacity-50">After the import is complete, you’ll be able to review and update your details before finalizing your profile.</p>
            <NavLink to="/signup-4" className="px-20 py-3 bg-[#418B71] text-white rounded-md text-center mt-10 mb-3">Proceed: Hourly Rate</NavLink>
            <p><span className="opacity-50">Having trouble? </span><b>Click here for help</b></p>
        </div>

    );
}
export default LinkedInSuccess