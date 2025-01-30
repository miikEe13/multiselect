import React from 'react';
import { MultiSelectProvider } from '../context/MultiSelectContext';
import Input from './Input';
import FilteredResults from './FilteredResults';
import SelectedResults from './SelectedResults';

const MultiSelect = () => {
  return (
    <MultiSelectProvider>
      <div className="w-96 p-4">
        <Input />
        <FilteredResults />
        <SelectedResults />
      </div>
    </MultiSelectProvider>
  );
};

export default MultiSelect;
