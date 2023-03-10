import React from 'react';
import { useNavigationContext } from '../Hooks';

const Route = ({ path, children }) => {

    const { currentPath } = useNavigationContext();

    return path === currentPath ? children : null;
}

export default Route;
