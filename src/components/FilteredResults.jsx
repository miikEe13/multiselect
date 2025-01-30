import React from 'react';
import useMultiSelect from '../hooks/useMultiSelect';

const FilteredResults = () => {
    const { searchTerm, selectedItems, setSelectedItems, filteredOptions, addNewOption } = useMultiSelect();

    // Handles selecting an item from the filtered options
    const handleSelect = (item) => {
        // Prevent adding duplicate items to the selected list
        if (!selectedItems.includes(item)) {
            setSelectedItems([...selectedItems, item]);
        }
    };

    // Handles adding a new option when it doesn't exist in the filtered options
    const handleAddNewOption = () => {
        if (searchTerm) {
            addNewOption(searchTerm);
        }
    };

    return (
        <div className='flex flex-col bg-white border border-gray-300 shadow-md'>
            <ul className={`max-h-80 relative  p-[10px 0] ${filteredOptions.length ? 'overflow-y-auto' : ''}`}>
                {filteredOptions.map((option, index) => (
                    <li
                        key={index}
                        onClick={() => handleSelect(option)}
                        className={`p-2 cursor-pointer mb-[10px] ${selectedItems.includes(option) ? 'bg-gray-100' : 'hover:bg-gray-100'
                            }`}
                    >
                        {/* Highlight the search term within the option text */}
                        {option.split(new RegExp(`(${searchTerm})`, 'i')).map((part, i) => (
                            <span
                                key={i}
                                className={part.toLowerCase() === searchTerm.toLowerCase() ? 'font-bold underline underline-offset-4' : ''}
                            >
                                {part}
                            </span>
                        ))}
                    </li>
                ))}

                {/* If no options are found, provide an option to add the search term */}
                {!filteredOptions.length && (
                    <>
                        <li
                            onClick={handleAddNewOption}
                            className="p-2 cursor-pointer text-gray-500 bg-gray-100 flex justify-between"
                        >
                            <span>
                                {searchTerm}
                            </span>
                            <span>{`(new value)`} </span>
                        </li>
                        {/* <div className="absolute top-0 mr-auto ml-auto mt-0 mb-0 left-0 right-0 w-0 h-0 border-l-[6px] border-r-[6px] border-t-[6px] border-l-transparent border-r-transparent border-t-white"></div> */}
                        <div className="absolute top-0 mr-auto ml-auto mt-0 mb-0 left-0 right-0 mt-[-6px] w-0 h-0 border-l-[6px] border-r-[6px] border-b-[6px] border-l-transparent border-r-transparent border-b-white"></div>

                    </>
                )}
            </ul>
        </div>
    );
};

export default FilteredResults;
