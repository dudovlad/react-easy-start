import React from 'react';
import { Link } from 'react-router-dom';

export const Menu = () => (
    <div>
        <h1> React quick start </h1> 
        <ul className="menu">
            <li>
                <Link to='/step0'>Step 0 - Greet the World</Link>
            </li>
            <li>
                <Link to='/step1'>Step 1 - Basic component</Link>
            </li>
            <li>
                <Link to='/step2'>Step 2 - JSX in depth </Link>
            </li>
            <li>
                <Link to='/step3'>Step 3 - Basic component's lifecycle </Link>
            </li>
            <li>
                <Link to='/step4'>Step 4 - React pipeline </Link>
            </li>
            <li>
                <Link to='/step5'>Step 5 - Props and State </Link>
            </li>            
            <li>
                <Link to='/step6'>Step 6 - Contaiment and Specialization </Link>
            </li>
        </ul>
    </div>
);