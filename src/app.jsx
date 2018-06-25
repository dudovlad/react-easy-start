import React from 'react';
import { BrowserRouter, Link } from 'react-router-dom';
import './style.css';
import { Main } from './main';

export const App = () => 
<BrowserRouter>
    <div className="body">
        <div className="box box-center">
            <Main/>
        </div>
        
        <div className="box box-center">
            <footer style={{marginTop: '50px'}}>
                <Link to='/'> Contents </Link>
            </footer>
        </div>
    </div>
</BrowserRouter>;