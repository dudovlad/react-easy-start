import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom';
import './style.css';
import { Home } from './home';
import { Step0 } from './step0';
import { Step1 } from './step1';
import { Step2 } from './step2';
import { Step3 } from './step3';

render(
    <BrowserRouter>
        <main>    
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/step0' component={Step0}/>
            <Route exact path='/step1' component={Step1}/>
            <Route exact path='/step2' component={Step2}/>
            <Route exact path='/step3' component={Step3}/> 
        </Switch>
        <footer style={{marginTop: '50px'}}>
            <Link to='/'> Contents </Link>
        </footer>
        </main>
    </BrowserRouter>
, document.getElementById('root'));
