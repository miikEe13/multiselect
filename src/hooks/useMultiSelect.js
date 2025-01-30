import { useContext } from 'react';
import { MultiSelectContext } from '../context/MultiSelectContext';

const useMultiSelect = () => {
  return useContext(MultiSelectContext);
};

export default useMultiSelect;
