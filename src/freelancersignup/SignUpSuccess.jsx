import Logo from '../components/Logo.jsx';
import { NavLink } from 'react-router-dom';
function SignUpSuccess() {
    return (
        <>
            <Logo />
            <div className="flex flex-col items-center p-5">
                <div className="flex flex-col items-center mt-4">
                    <img src="signup6.svg" alt="user-profile" className="mb-10" />
                    <h1 className="text-5xl font-bold text-center">
                        Congratulations, your account has been created.
                    </h1>
                    <h1 className="text-5xl font-bold text-center mt-3">
                        Let’s get you started
                    </h1>
                    <NavLink to="/signup-success" className="bg-[#418B71] text-white rounded-md w-56 py-3 mt-10 text-center shadow-md">
                        Get Started
                    </NavLink>
                </div>
            </div>
        </>
    );
}

export default SignUpSuccess;