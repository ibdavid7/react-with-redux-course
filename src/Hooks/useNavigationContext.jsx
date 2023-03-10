import React, { useContext } from 'react';
import NavigationContext from '../Context/NavigationContext';

const useNavigationContext = () => {
  return (useContext(NavigationContext));
}

export default useNavigationContext;
