import Nav from '../components/Nav.jsx';
import { Search } from 'lucide-react';

function Dashboard() {
    const jobs = [
        {
            title: 'Develop a WordPress Website for a Marketing Agency',
            price: 'P600 - P1,000 (Fixed-Price)',
            level: 'Entry to Intermediate Level',
            duration: 'More than 6 months, Less than 30 hrs/week',
            tags: ['WordPress', 'HTML', 'SEO'],
            reviews: '5.0 (15 reviews)',
            proposals: 'Proposals: 5 to 10',
            location: 'Philippines, Cebu City',
            posted: 'Posted yesterday',
            user: 'Jane Doe',
        },
        {
            title: 'Develop a WordPress Website for a Marketing Agency',
            price: 'P600 - P1,000 (Fixed-Price)',
            level: 'Entry to Intermediate Level',
            duration: 'More than 6 months, Less than 30 hrs/week',
            tags: ['WordPress', 'HTML', 'SEO'],
            reviews: '5.0 (15 reviews)',
            proposals: 'Proposals: 5 to 10',
            location: 'Philippines, Cebu City',
            posted: 'Posted yesterday',
            user: 'Jane Doe',
        },
        {
            title: 'Develop a WordPress Website for a Marketing Agency',
            price: 'P600 - P1,000 (Fixed-Price)',
            level: 'Entry to Intermediate Level',
            duration: 'More than 6 months, Less than 30 hrs/week',
            tags: ['WordPress', 'HTML', 'SEO'],
            reviews: '5.0 (15 reviews)',
            proposals: 'Proposals: 5 to 10',
            location: 'Philippines, Cebu City',
            posted: 'Posted yesterday',
            user: 'Jane Doe',
        },
    ];

    return (
        <>
            <Nav />
            <div className="h-screen">
                <div className="h-2/6 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('dashboard.svg')" }}>
                    <div className="p-20">
                        <h1 className="text-white text-4xl mb-5">Welcome Back, <span className='font-bold'>Marianne Joy Napisa!</span></h1>
                        <h3 className="text-white text-2xl">Let’s Make Your Next Opportunity Count!</h3>
                    </div>
                </div>

                <div className="flex justify-center -mt-16 space-x-4 p-10 relative z-10">
                    <div className="bg-white shadow-lg rounded-lg p-7 w-1/4 text-center">
                        <h2 className="text-xl font-bold mb-2">New Job Matches</h2>
                        <h1 className="text-5xl my-4 text-[#34A853] font-bold">5</h1>
                        <p className="opacity-50">Your Marketplace for Work: Connect with talented professionals.</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-7 w-1/4 text-center">
                        <h2 className="text-xl font-bold mb-2">Engagement Success Rate</h2>
                        <h1 className="text-5xl my-4 text-[#34A853] font-bold">40%</h1>
                        <p className="opacity-50">Proven Track Record of Successful Collaborations</p>
                    </div>
                    <div className="bg-white shadow-lg rounded-lg p-7 w-1/4 text-center">
                        <h2 className="text-xl font-bold mb-2">Ratings and Reviews</h2>
                        <h1 className="text-5xl my-4 text-[#34A853] font-bold">4.5/5</h1>
                        <p className="opacity-50">Rated by your collaborators on 12 completed projects.</p>
                    </div>
                </div>
                <div className="relative w-2/4 px-10 mx-auto mb-10">
                    <div className="absolute inset-y-0 start-10 flex items-center ps-3 pointer-events-none">
                        <Search />
                    </div>
                    <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search for Jobs or Freelancers" required />
                </div>
                <div className="flex px-10 space-x-10 border-b">
                    <button className="text-[#34A853] font-bold pb-2 border-b-2 border-[#34A853]">Save Jobs</button>
                    <button className="text-gray-500 pb-2">Saved Talents</button>
                    <button className="text-gray-500 pb-2">Saved Projects</button>
                </div>
                <div className="p-10">
                    <h2 className="text-xl font-bold mb-4">Your Top Job Recommendations: Tailored Just for You</h2>
                    <div className="space-y-6 pb-2">
                        {jobs.map((job, index) => (
                            <div key={index} className="bg-white rounded-lg">
                                <hr></hr>
                                <div className="flex justify-between my-2">
                                    <div className="text-gray-500 text-sm">
                                        <span>{job.posted}</span> | <span>Posted by: {job.user}</span> | <span>{job.location}</span>
                                    </div>
                                    <div className="text-gray-400 text-sm cursor-pointer">&#9825;</div>
                                </div>
                                <h3 className="text-lg font-bold mb-2">{job.title}</h3>
                                <p className="text-sm mb-2">
                                    {job.price} | {job.level} | {job.duration}
                                </p>
                                <p className="text-gray-500 text-sm mb-2">
                                    Quo dolor veniam nam voluptas labore et quae, similique id magni officia...
                                </p>
                                <div className="flex space-x-2 mb-4">
                                    {job.tags.map((tag, i) => (
                                        <span key={i} className="bg-[#FFD700] text-black text-xs font-semibold py-1 px-2 rounded-lg">{tag}</span>
                                    ))}
                                </div>
                                <div className="flex justify-between items-center">
                                    <div className="text-sm text-gray-600">
                                        Payment Verified | ⭐ {job.reviews} | {job.proposals}
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                    <hr></hr>
                    
                </div>

                <div className="flex justify-center space-x-2 mt-5 pb-10">
                    <button className="px-3 py-1 opacity-50">Previous</button>
                    {[1, 2, 3, 4, 5].map((num) => (
                        <button key={num} className={`px-3 py-1 ${num === 2 ? 'bg-[#418B71] text-white' : 'bg-gray-200'} rounded-md`}>{num}</button>
                    ))}
                    <button className="px-3 py-1">Next</button>
                </div>
            </div>
        </>
    );
}

export default Dashboard;
