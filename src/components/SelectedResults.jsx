import React from 'react';
import useMultiSelect from '../hooks/useMultiSelect';

const SelectedResults = () => {
    const { selectedItems, setSelectedItems } = useMultiSelect();

    // Handles the removal of an item from the selected items list
    const handleRemove = (item) => {
        setSelectedItems(selectedItems.filter(selectedItem => selectedItem !== item));  // Filters out the selected item
    };

    return (
        // Render only if there are selected items
        (selectedItems.length > 0) &&
        <div className="mt-4 flex flex-wrap bg-white border border-gray-300">
            {selectedItems.map((item, index) => (
                <div 
                    key={index} 
                    className="flex items-center bg-gray-200 text-gray-500 p-2 rounded-md m-1"
                >
                    {item}
                    {/* Button to remove the selected item */}
                    <button 
                        onClick={() => handleRemove(item)} 
                        className="ml-2 text-red-500"
                    >
                        ×
                    </button>
                </div>
            ))}
        </div>
    );
};

export default SelectedResults;
