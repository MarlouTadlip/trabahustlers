import { NavLink } from 'react-router-dom';
import { Search,Plus } from 'lucide-react';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { HTML5Backend } from 'react-dnd-html5-backend';

const ItemType = {
  SKILL: 'skill',
};

const DraggableSkill = ({ skill }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemType.SKILL,
    item: { skill },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <button
      ref={drag}
      className="bg-white text-black border border-1 border-[#EF8F00] rounded-md px-4 py-2 m-1 flex items-center"
      style={{ opacity: isDragging ? 0.5 : 1 }}
    >
      {skill}<Plus size={10} className="ml-2"/>
    </button>
  );
};


DraggableSkill.propTypes = {
  skill: PropTypes.string.isRequired,
};

const DroppableArea = ({ onDrop, selectedSkills }) => {
  const [{ isOver }, drop] = useDrop(() => ({
    accept: ItemType.SKILL,
    drop: (item) => onDrop(item.skill),
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <div
      ref={drop}
      className={`border border-gray-300 rounded-lg p-2 mb-4 min-h-[50px] ${isOver ? 'bg-green-100' : 'bg-white'}`}
    >
      {selectedSkills.length > 0 ? (
        selectedSkills.map((skill, index) => (
          <span key={index} className="bg-gray-200 rounded-full px-3 py-1 mr-2 mb-2 inline-block">
            {skill}
          </span>
        ))
      ) : (
        <span className="text-gray-400">Drop skills here</span>
      )}
    </div>
  );
};

DroppableArea.propTypes = {
  onDrop: PropTypes.func.isRequired,
  selectedSkills: PropTypes.arrayOf(PropTypes.string).isRequired,
};

function SignUp3() {
  const [selectedSkills, setSelectedSkills] = useState([]);
  const popularSkills = ['HTML', 'CSS', 'JavaScript', 'React', 'Node.js', 'Figma', 'Photoshop', 'UI/UX Design'];

  const handleDrop = (skill) => {
    if (!selectedSkills.includes(skill)) {
      setSelectedSkills((prevSkills) => [...prevSkills, skill]);
    }
  };

  return (
    <DndProvider backend={HTML5Backend}>
      <div className="flex h-screen">        
        <div className="w-1/2 flex flex-col bg-white pl-10 pb-10 pr-28 pt-7">
            <h1 className="pb-10">3/8 <b className="ml-3">Client Registration</b></h1>
            <h1 className="text-4xl font-bold mb-4 mt-10">MAIN SKILLS REQUIRED</h1>
            <h1 className="text-4xl font-bold mb-4">FOR YOUR PROJECT?</h1>
            <p className="text-gray-600 mb-6">Post your project and connect with top talent.</p>

            <form>
                <div className="mb-6">
                    <div>
                        <label className="block mb-2 text-sm font-medium text-gray-900">Browse Skills</label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                                <Search />
                            </div>
                            <input type="text" id="simple-search" className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full ps-10 p-2.5" placeholder="Search" required />
                        </div>
                        <p className="opacity-50 text-sm mt-2">For the best results, add 3 - 5 skills</p>
                    </div>
                </div>
            </form>
            <div className="flex items-center justify-center mb-2">
              <hr className="flex-grow border-t-2 border-gray-300" />
              <span className="mx-4 text-gray-600">or</span>
              <hr className="flex-grow border-t-2 border-gray-300" />
            </div>
            <label className="text-lg font-medium">Selected Skills</label>
            <DroppableArea onDrop={handleDrop} selectedSkills={selectedSkills} />

            <label className="text-lg font-medium mt-2 mb-3">Popular skills for Web Design</label>
            <div className="flex flex-wrap">
              {popularSkills.map((skill) => (
                <DraggableSkill key={skill} skill={skill} />
              ))}
            </div>
        </div>

        <div className="w-1/2 bg-cover bg-center" style={{ backgroundImage: "url('signup3client.svg')" }}>
        </div>
      </div>
      <div className="w-full bg-gray-200 rounded-full h-1.5 mb-4 dark:bg-gray-700">
        <div className="bg-[#00B676] h-1.5 rounded-full" style={{ width: '50%' }}></div>
      </div>
      <div className="flex justify-between mt-8 pl-7 pr-7 pb-7">
        <NavLink to="/signup-client-2" className="border-2 border-[#418B71] text-[#418B71] rounded-md px-10 py-2">
              Back
        </NavLink>
        <NavLink to="/signup-client-4" className="bg-[#418B71] text-white rounded-md px-10 py-2">
          Proceed: Project Scope
        </NavLink>
      </div>
    </DndProvider>
  );
};

export default SignUp3;