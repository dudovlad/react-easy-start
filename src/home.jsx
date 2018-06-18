import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => (
    <div>
        <ul>
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
                <Link to='/step4'>Step 4 - Props and State </Link>
            </li>
        </ul>
    </div>
)