import Nav from '../components/Nav.jsx';
import { Search } from 'lucide-react';

function Jobs() {
    return (
        <> 
            <Nav />
            <div className="h-screen">
                {/* Header Section */}
                <div className="p-5 bg-gray-100 border-b border-gray-300">
                    <div className="flex items-center">
                        <div className="relative w-1/2 pr-10">
                            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
                                <Search />
                            </div>
                            <input 
                                type="text" 
                                id="job-search" 
                                className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5" 
                                placeholder="Search for Jobs or Freelancers" 
                                required 
                            />
                        </div>
                        <button className="bg-white border border-gray-300 text-gray-700 text-sm rounded-lg px-4 py-2 flex items-center">
                            Sort By
                        </button>
                    </div>
                </div>

                {/* Main Content */}
                <div className="flex">
                    {/* Sidebar Filters */}
                    <aside className="w-1/4 bg-gray-100 p-5 border-r border-gray-300">
                        <h3 className="font-bold text-lg mb-4">Categories</h3>
                        <select className="w-full border border-gray-300 p-2 rounded-lg mb-4">
                            <option value="">Select Categories</option>
                        </select>

                        <h3 className="font-bold text-lg mb-4">Experience Level</h3>
                        <div className="space-y-2">
                            <div>
                                <input type="checkbox" id="entry" className="mr-2" />
                                <label htmlFor="entry">Entry Level</label>
                            </div>
                            <div>
                                <input type="checkbox" id="intermediate" className="mr-2" />
                                <label htmlFor="intermediate">Intermediate Level</label>
                            </div>
                            <div>
                                <input type="checkbox" id="expert" className="mr-2" />
                                <label htmlFor="expert">Expert Level</label>
                            </div>
                        </div>

                        <h3 className="font-bold text-lg mt-6 mb-4">Job Type</h3>
                        <div className="space-y-2">
                            <div>
                                <input type="checkbox" id="hourly" className="mr-2" />
                                <label htmlFor="hourly">Hourly</label>
                            </div>
                            <div>
                                <input type="checkbox" id="fixed" className="mr-2" />
                                <label htmlFor="fixed">Fixed-Price</label>
                            </div>
                        </div>

                        <h3 className="font-bold text-lg mt-6 mb-4">Project Length</h3>
                        <div className="space-y-2">
                            <div>
                                <input type="checkbox" id="less-than-month" className="mr-2" />
                                <label htmlFor="less-than-month">Less than one month</label>
                            </div>
                            <div>
                                <input type="checkbox" id="one-to-three-months" className="mr-2" />
                                <label htmlFor="one-to-three-months">1 to 3 months</label>
                            </div>
                            <div>
                                <input type="checkbox" id="more-than-six-months" className="mr-2" />
                                <label htmlFor="more-than-six-months">More than 6 months</label>
                            </div>
                        </div>
                    </aside>

                    {/* Job Listings */}
                    <main className="w-3/4 p-5">
                        <h2 className="text-2xl font-bold mb-4">Job Recommendations for You</h2>
                        <div className="space-y-4">
                            {[1, 2, 3, 4, 5].map((job, index) => (
                                <div key={index} className="bg-white shadow-lg rounded-lg p-5 border border-gray-300">
                                    <h3 className="text-lg font-bold mb-2">Develop a WordPress Website for a Marketing Agency</h3>
                                    <p className="text-sm opacity-70 mb-2">₱600 - ₱1,000 (Fixed-Price) | Entry to Intermediate Level | Est. Time: More than 6 months, Less than 30 hrs./week</p>
                                    <p className="text-sm mb-4">"Quo dolor veniam nam voluptas labore et quaerat similique id magni officia..."</p>
                                    <div className="flex justify-between items-center">
                                        <div className="flex space-x-2">
                                            <span className="bg-yellow-100 text-yellow-700 text-xs px-2 py-1 rounded-full">WordPress</span>
                                            <span className="bg-blue-100 text-blue-700 text-xs px-2 py-1 rounded-full">HTML</span>
                                            <span className="bg-green-100 text-green-700 text-xs px-2 py-1 rounded-full">SEO</span>
                                        </div>
                                        <button className="bg-[#34A853] text-white py-1 px-4 rounded-lg text-sm">Apply</button>
                                    </div>
                                </div>
                            ))}
                        </div>

                        <div className="flex justify-center space-x-2 mt-10 pb-10">
                            <button className="px-3 py-1 opacity-50">Previous</button>
                            {[1, 2, 3, 4, 5].map((num) => (
                                <button key={num} className={`px-3 py-1 ${num === 2 ? 'bg-[#418B71] text-white' : 'bg-gray-200'} rounded-md`}>{num}</button>
                            ))}
                            <button className="px-3 py-1">Next</button>
                        </div>
                    </main>
                </div>
            </div>
        </>
    );
}

export default Jobs;