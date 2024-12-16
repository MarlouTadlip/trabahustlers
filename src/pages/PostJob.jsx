import Nav from '../components/Nav.jsx';

function PostProject() {
    return (
        <>
            <Nav />
            <div className="h-screen">
                <div className="h-2/6 bg-cover bg-center bg-no-repeat relative" style={{ backgroundImage: "url('dashboard.svg')" }}>
                    <div className="p-20">
                        <h1 className="text-white text-4xl mb-5 font-bold">Post a Project</h1>
                        <h3 className="text-white text-2xl">Start new job list and reach a wider audience with your job posting</h3>
                    </div>
                </div>

                <div className="p-10 bg-gray-100">
                    <div className="bg-[#E7E7E8] p-16 rounded-md shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Project Details</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <div className="border-dashed border-2 border-gray-300 h-full flex items-center justify-center text-gray-400 cursor-pointer bg-white">
                                    <p>Upload your product image</p>
                                </div>
                            </div>
                            <div className="pb-10">
                                <div>
                                    <label className="block mb-2">Job Title</label>
                                    <input type="text" className="w-full p-2 border rounded" placeholder="Placeholder" />

                                    <label className="block mt-4 mb-2">Job Description</label>
                                    <textarea className="w-full p-2 border rounded" rows="4" placeholder="Placeholder"></textarea>
                                </div>
                                <div>
                                    <label className="block mb-2">Category</label>
                                    <select className="w-full p-2 border rounded">
                                        <option>Placeholder</option>
                                    </select>
                                </div>
                                <div>
                                    <label className="block mb-2 mt-4">Skills Required</label>
                                    <select className="w-full p-2 border rounded">
                                        <option>Placeholder</option>
                                    </select>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="grid grid-cols-2 gap-6 mb-6">
                        <div className="bg-[#E7E7E8] p-5 rounded-md shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Budget and Timeline</h2>

                            <label className="block mb-2">Budget Type</label>
                            <select className="w-full p-2 mb-2 border rounded">
                                <option>Placeholder</option>
                            </select>
                            
                            <label className="block mb-2">Budget Amount</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="Placeholder" />

                            <label className="block mt-4 mb-2">Duration</label>
                            <select className="w-full p-2 border rounded">
                                <option>Placeholder</option>
                            </select>

                            <label className="block mt-4 mb-2">Project Date</label>
                            <input type="date" className="w-full p-2 border rounded" />
                        </div>

                        <div className="bg-[#E7E7E8] p-5 rounded-md shadow-md">
                            <h2 className="text-2xl font-semibold mb-4">Additional Preferences</h2>
                            <label className="block mb-2">Experience Level</label>
                            <select className="w-full p-2 mb-2 border rounded">
                                <option>Placeholder</option>
                            </select>

                            <label className="block mb-2">Number of Freelancer</label>
                            <input type="text" className="w-full p-2 border rounded" placeholder="Placeholder" />

                            <label className="block mb-2">Preferred Location</label>
                            <select className="w-full p-2 mb-2 border rounded">
                                <option>Placeholder</option>
                            </select>

                            <label className="block mb-2">Attachments (Optional)</label>
                            <select className="w-full p-2 mb-2 border rounded">
                                <option>Placeholder</option>
                            </select>

                        </div>
                    </div>

                    <div className="bg-[#E7E7E8] p-10 rounded-md shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Milestone Management</h2>
                        <table className="w-full border-collapse border mb-4 table-fixed">
                            <thead>
                                <tr className="bg-[#EF8F00] text-white">
                                    <th className="px-2 py-5 max-w-sm">Milestone Name</th>
                                    <th className="px-2 py-5">Details</th>
                                    <th className="px-2 py-5">DueDate</th>
                                    <th className="px-2 py-5">Budget</th>
                                    <th className="px-2 py-5">Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white">
                                    <td className="p-2 border">E-commerce Website Redesign</td>
                                    <td className="p-2 border">Jane Doe</td>
                                    <td className="p-2 border">Dec 1, 2024</td>
                                    <td className="p-2 border">$1,200</td>
                                    <td className="p-2 border text-center">
                                        <button className="text-[#418B71] mr-2">✏️</button>
                                        <button className="text-red-600">🗑️</button>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="p-2 border">Social Media Marketing Specialist</td>
                                    <td className="p-2 border">Alice Baker</td>
                                    <td className="p-2 border">Dec 1, 2024</td>
                                    <td className="p-2 border">$1,200</td>
                                    <td className="p-2 border text-center">
                                        <button className="text-[#418B71] mr-2">✏️</button>
                                        <button className="text-red-600">🗑️</button>
                                    </td>
                                </tr>
                                <tr className="bg-white">
                                    <td className="p-2 border">Social Media Marketing Specialist</td>
                                    <td className="p-2 border">Alice Baker</td>
                                    <td className="p-2 border">Dec 1, 2024</td>
                                    <td className="p-2 border">$1,200</td>
                                    <td className="p-2 border text-center">
                                        <button className="text-[#418B71] mr-2">✏️</button>
                                        <button className="text-red-600">🗑️</button>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <hr className="border-1 border-[#6F6F6F]"></hr>
                        <div className="flex w-full space-x-10">
                            <div className="w-1/2">
                                <label className="block my-2">Milestone Name</label>
                                <input type="text" className="w-full p-2 border rounded" placeholder="Placeholder" />

                                <label className="block mt-4 mb-2">Description</label>
                                <textarea className="w-full p-2 border rounded" rows="10" placeholder="Placeholder"></textarea>
                            </div>
                            <div className="w-1/2">
                                <label className="block my-2">Milestone Description</label>
                                <textarea rows="13" className="p-5 mb border rounded-md w-full" placeholder="Placeholder" ></textarea>
                            </div>
                        </div>
                    </div>

                    <div className="bg-[#E7E7E8] p-5 rounded-md shadow-md mb-6">
                        <h2 className="text-2xl font-semibold mb-4">Visibility Settings</h2>
                        <div className="grid grid-cols-2 gap-4">
                            <div>
                                <label className="block mb-2">Tags</label>
                                <select className="w-full p-2 border rounded">
                                    <option>Placeholder</option>
                                </select>
                            </div>
                            <div>
                                <label className="block mb-2">Post Visibility</label>
                                <select className="w-full p-2 border rounded">
                                    <option>Placeholder</option>
                                </select>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end gap-4">
                        <button className="bg-[#418B71] text-white px-5 py-2 rounded">Publish</button>
                        <button className="border border-gray-300 px-5 py-2 rounded">Cancel</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default PostProject;
