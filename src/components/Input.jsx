import React from 'react';
import useMultiSelect from '../hooks/useMultiSelect';

const Input = () => {
    const { searchTerm, setSearchTerm, addNewOption } = useMultiSelect();  // Access addNewOption from the context

    // Handles Enter key press to add a new option
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' && searchTerm.trim()) {
            e.preventDefault();  // Prevent form submission or default behavior
            addNewOption(searchTerm.trim());  // Add the new option
        }
    };
    return (
        <div className='mb-[10px]'>
            {/* Input field to capture the search term or new option */}
            <label className='text-[gray] text-[12px]'>{"Chart type"}</label>
            <input
                type="text"
                placeholder="Search or add..."
                value={searchTerm}  // Controlled input tied to the search term
                onChange={(e) => setSearchTerm(e.target.value)}  // Updates the search term on user input
                onKeyDown={handleKeyDown}  // Updates the search term on user input for 'Enter' key
                className="w-full p-2 border bg-white border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-400"
            />
        </div>
    );
};

export default Input;
