import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import './index.css'
import Index from './Index.jsx'
import FindWork from './landing/FindWork.jsx';
import FindFreelancers from './landing/FindFreelancers.jsx';
import Explore from './landing/Explore.jsx';
import Help from './landing/Help.jsx';
import Login from './Login.jsx';
import SignUp from './SignUp.jsx';

import SignUp1 from './freelancersignup/SignUp1.jsx';
import SignUp2 from './freelancersignup/SignUp2.jsx';
import UploadResume from './freelancersignup/UploadResume.jsx';
import SignUp3 from './freelancersignup/SignUp3.jsx';
import ImportLinkedIn from './freelancersignup/ImportLinkedIn.jsx'
import UploadSuccess from './freelancersignup/UploadSuccess.jsx'
import ImportSuccess from './freelancersignup/ImportSuccess.jsx'
import SignUp4 from './freelancersignup/SignUp4.jsx';
import SignUp5 from './freelancersignup/SignUp5.jsx';
import SignUpSuccess from './freelancersignup/SignUpSuccess.jsx';

import SignUp1Client from './clientsignup/SignUp1.jsx';
import SignUp2Client from './clientsignup/SignUp2.jsx';
import SignUp3Client from './clientsignup/SignUp3.jsx';
import SignUp4Client from './clientsignup/SignUp4.jsx';
import SignUp5Client from './clientsignup/SignUp5.jsx';

const router = createBrowserRouter([
  {
    path: '/',
    element: <Index/>
  },
  {
    path: '/login',
    element: <Login/>
  },
  {
    path: '/signup',
    element: <SignUp/>
  },
  {
    path: '/find-work',
    element: <FindWork/>
  },
  {
    path: '/find-freelancers',
    element: <FindFreelancers/>
  },
  {
    path: '/explore',
    element: <Explore/>
  },
  {
    path: '/help-center',
    element: <Help/>
  },
  {
    path: '/signup-freelancer-1',
    element:<SignUp1/>
  },
  {
    path: '/signup-freelancer-2',
    element:<SignUp2/>
  },
  {
    path: '/upload-resume',
    element: <UploadResume/>
  },
  {
    path: '/signup-freelancer-3',
    element: <SignUp3/>
  },
  {
    path: '/import-linkedin',
    element: <ImportLinkedIn/>
  },
  {
    path: '/upload-resume-success',
    element: <UploadSuccess/>
  },
  {
    path: '/import-linkedin-success',
    element: <ImportSuccess/>
  },
  {
    path: '/signup-freelancer-4',
    element: <SignUp4/>
  },
  {
    path: '/signup-freelancer-5',
    element: <SignUp5/>
  },
  {
    path: '/signup-success',
    element: <SignUpSuccess/>
  },
  {
    path: '/signup-client-1',
    element: <SignUp1Client/>
  },
  {
    path: '/signup-client-2',
    element: <SignUp2Client/>
  },
  {
    path: '/signup-client-3',
    element: <SignUp3Client/>
  },
  {
    path: '/signup-client-4',
    element: <SignUp4Client/>
  },
  {
    path: '/signup-client-5',
    element: <SignUp5Client/>
  }
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>
)
