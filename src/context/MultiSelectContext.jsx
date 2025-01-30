import React, { createContext, useState, useEffect } from 'react';

export const MultiSelectContext = createContext();

export const MultiSelectProvider = ({ children }) => {
  // Manages the search term entered by the user
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedItems, setSelectedItems] = useState([]);
  const [allOptions, setAllOptions] = useState(['Line chart', 'Area chart', 'Column chart', 'bar chart', 'Scatter chart', 'Pie chart', 'Donut chart']);
  const [filteredOptions, setFilteredOptions] = useState(() => [...allOptions]);

  // Filters options whenever the search term changes
  useEffect(() => {
    if (!searchTerm) {
      // If no search term, show all options
      setFilteredOptions([...allOptions]);
      return;
    }

    const lowercasedTerm = searchTerm.toLowerCase();
    setFilteredOptions(
      allOptions.filter(option => option.toLowerCase().includes(lowercasedTerm))
    );
  }, [searchTerm, allOptions]);

  // Handles "Select All" functionality when the user presses Ctrl + A
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.ctrlKey && e.key === 'a') {
        e.preventDefault();  // Prevent default browser behavior
        setSelectedItems([...filteredOptions]);  // Select all currently visible options
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [filteredOptions]);

  // Adds a new option to the list if it doesn't already exist
  const addNewOption = (newOption) => {
    if (!allOptions.includes(newOption)) {
      const updatedOptions = [...allOptions, newOption];
      setAllOptions(updatedOptions);
      setFilteredOptions(updatedOptions);
      setSelectedItems([...selectedItems, newOption]);
    }
  };

  // Provides the context values for the components to consume
  const contextValue = {
    searchTerm,
    setSearchTerm,
    selectedItems,
    setSelectedItems,
    filteredOptions,
    addNewOption,
  };

  return (
    <MultiSelectContext.Provider value={contextValue}>
      {children}
    </MultiSelectContext.Provider>
  );
};
