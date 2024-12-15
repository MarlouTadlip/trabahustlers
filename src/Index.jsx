import Nav from './landing/Nav.jsx';
import { Search,Facebook,Mail,Twitter } from 'lucide-react';
import { NavLink } from 'react-router-dom';

function Index() {
  return (
    <>
      <Nav className="relative z-20" />
      <div
        className="h-screen bg-cover bg-center bg-no-repeat flex flex-col justify-center items-center -mt-28"
        style={{ backgroundImage: "url('landing1.svg')" }}
      >
        <h1 className="text-5xl text-white font-bold mb-2">
          Find Top Talent or Your Next Gig with Ease
        </h1>
        <p className="text-2xl text-white text-center">
          Connect freelancers with clients for seamless collaboration, secure payments, and quality work
        </p>
        <div className="relative w-3/6 flex mt-10 items-center">
          <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <Search />
          </div>
          <input
            type="text"
            id="simple-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5"
            placeholder="Search"
            required
          />
          <h1 className="mx-5 text-white text-2xl">or</h1>
          <NavLink to="/signup">
            <button className="bg-[#418B71] py-3 w-36 rounded-lg text-white">Join Us</button>
          </NavLink>
        </div>
      </div>

      <div
        className="pb-16"
        style={{
          background: "linear-gradient(to bottom, #3E363F, #97BAEB, #B3B3BD, #85FFF9)",
        }}>
        <div className="h-screen flex">
          <div className="w-2/6 bg-cover " style={{ backgroundImage: "url('landing2.svg')" }}>
          </div>  

          <div className="flex flex-col  justify-center p-20">
            <h1 className="text-[#00B676] text-4xl font-bold">CREATE AN ACCOUNT</h1>
            <p className="text-white text-2xl mb-10">Sign up for free to create your profile, whether you’re a freelancer or a client looking to hire.</p>
            <h1 className="text-[#00B676] text-4xl font-bold">APPLY FOR PROJECTS</h1>
            <p className="text-white text-2xl mb-10">Clients can post job listings while freelancers can browse and apply for projects that match their skills.</p>
            <h1 className="text-[#00B676] text-4xl font-bold">EASY COLLABORATION</h1>
            <p className="text-white text-2xl mb-10">Use our secure tools and dashboards to collaborate effectively throughout the project.</p>
            <h1 className="text-[#00B676] text-4xl font-bold">GET PAID SECURELY</h1>
            <p className="text-white text-2xl">Payments are processed securely through our escrow system, ensuring both parties are protected.</p>
          </div>
      </div>
      <div className="pt-10 pb-20">
      <h1 className="text-5xl font-bold text-center mb-4 text-white">Why Choose Us?</h1>
      <p className="text-center text-2xl text-white mb-10">
        Empowering Freelancers and Clients
      </p>
      </div>
      <div className="h-screen flex">
        <div className="w-4/6 bg-cover " style={{ backgroundImage: "url('landing3.svg')" }}>
        </div>  
        <div className="w-2/6 flex flex-col  justify-center  -ml-40">
          <h1 className="text-5xl font-bold text-center mb-12 text-white">FREELANCERS</h1>
          <div className="grid grid-cols-2 gap-5 ">
            <button className="bg-[#418B71] py-7 px-4 w-full rounded-lg text-white text-lg">Job Search & Filtering</button>
            <button className="bg-[#418B71] py-7 px-4 w-full rounded-lg text-white text-lg">Reliable Payment System</button>
            <button className="bg-[#418B71] py-7 px-4 w-full rounded-lg text-white text-lg">Easy Bid Submission</button>
            <button className="bg-[#418B71] py-7 px-4 w-full rounded-lg text-white text-lg">Multiple Withdrawal Option</button>
            
          </div>
        </div>
      </div>
      <div className="h-screen flex"> 
        <div className="w-2/6 flex flex-col  justify-center ml-20">
          <h1 className="text-5xl font-bold text-center mb-12 text-white">CLIENTS</h1>
          <div className="grid grid-cols-2 gap-5 ">
            <button className="bg-[#418B71] py-7 px-4 w-full rounded-lg text-white text-lg">Trusted Freelancers</button>
            <button className="bg-[#EF8F00] py-7 px-4 w-full rounded-lg text-white text-lg">Seamless Communication</button>
            <button className="bg-[#EF8F00] py-7 px-4 w-full rounded-lg text-white text-lg">Safe & Secure Payments</button>
            <button className="bg-[#418B71] py-7 px-4 w-full rounded-lg text-white text-lg">Project Tools & Tracking</button>
          </div>
        </div>
        <div className="w-4/6 bg-cover " style={{ backgroundImage: "url('landing4.svg')" }}>
        </div> 
      </div>
        <div
          className="py-10"
        >
          <h2 className="text-5xl font-bold text-center mb-6 text-white mt-10">
            Success Stories from Our Thriving Community
          </h2>
          <p className="text-center text-2xl text-white mb-20">Discover how our platform has empowered freelancers and clients to achieve their goals and bring projects to life.</p>
          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="path/to/testimonial1.jpg" alt="Testimonial 1" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                “Finding the right talent for my project was effortless! This platform gave me peace of mind throughout the process.”
              </p>
              <h4 className="font-bold">- Alex L. Forrester</h4>
              <p className="text-sm text-gray-500">E-commerce Business Owner</p>
            </div>
            <div className="bg-white p-6 rounded-lg shadow-md">
              <img src="path/to/testimonial2.jpg" alt="Testimonial 2" className="w-16 h-16 rounded-full mx-auto mb-4" />
              <p className="text-gray-600 mb-4">
                “This platform has been a game-changer for me. The secure payment system and project management tools make everything easier.”
              </p>
              <h4 className="font-bold">- Sarah H. Russ</h4>
              <p className="text-sm text-gray-500">Graphic Designer</p>
            </div>
          </div>
        </div>

        {/* Call to Action Section */}
        <div className="py-20  bg-[#418B71] m-10 text-white flex justify-between p-20 rounded-md">
          <h2 className="text-5xl font-bold">Ready to take the next step?</h2>
          <NavLink to="/signup">
            <button className="bg-white text-[#418B71] py-4 px-20 rounded-lg font-semibold">
              Join Us
            </button>
          </NavLink>
        </div>
      </div> 
        {/* Footer */}
        <nav className="flex justify-between items-center p-4 bg-white text-[#418B71] h-26">
            <NavLink to="/dashboard" className="flex items-center">
                <img src="Icon.png" alt="logo" className="w-15 h-15"/>
                <div className="flex items-center p-5">
                    <span className="text-2xl font-bold">
                        T R A B A<span className="text-[#EF8F00]"> H U S T L E</span>
                    </span>
                </div>
            </NavLink>

            <div className="flex space-x-16">
                <NavLink to="/post-job" className="hover:text-gray-400">
                    About Us
                </NavLink>
                <NavLink to="/post-project" className="hover:text-gray-400">
                    Support
                </NavLink>
                <NavLink to="/post-project" className="hover:text-gray-400">
                    Privacy Policy
                </NavLink>
                <NavLink to="/post-project" className="hover:text-gray-400">
                    Terms of Service
                </NavLink>
            </div>
            <div className="flex space-x-8 px-10">
                <button>
                  <Facebook/>
                </button>
                <button>
                  <Mail/>
                </button>
                <button>
                  <Twitter/>
                </button>
               
            </div>
        </nav>
        <hr className="border-[#418B71] border-2 mb-2"></hr>
        <footer className="text-center opacity-50 my-4">&copy; 2024 Trabahustle. All Rights Reserved.</footer>
    </>
  );
}

export default Index;
