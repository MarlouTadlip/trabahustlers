import { NavLink } from 'react-router-dom';
import { Info } from 'lucide-react'

function UploadResume() {
    return(
        <div className="flex flex-col items-center text-center p-12">
            <h1 className="font-bold text-3xl mb-10" >UPLOADING YOUR RESUME</h1>
            <p className="opacity-50">Drag and drop your resume to upload</p>
            <img src="uploadresume.svg" className=" mb-8 scale-90"></img>
            <p className="text-red-500 mb-3 flex justify-center"><Info className="mr-2"/>Please wait while we upload your resume</p>
            <p className="opacity-50">Once the upload is complete, you’ll have the chance to review and update your resume details before finalizing your profile.</p>
            <div className="flex space-x-12 mt-10 mb-5">
                <NavLink to="/signup-2" className="px-20 py-2 border border-solid border-black rounded-md text-center font-bold">Cancel</NavLink>
                <NavLink to="/upload-resume-success" className="px-20 py-2 bg-[#418B71] rounded-md text-white font-bold">Upload</NavLink>
            </div>
            <p><span className="opacity-50">Having trouble? </span><b>Click here for help</b></p>
        </div>

    );
}
export default UploadResume