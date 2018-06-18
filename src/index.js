import React from 'react';
import { BrowserRouter, Route, Switch, Link } from 'react-router-dom'
import { render } from 'react-dom';
import './style.css';
import { Home } from './home';
import * as Steps from './steps';

render(
    <BrowserRouter>
        <main>    
        <Switch>
            <Route exact path='/' component={Home}/>
            <Route exact path='/step0' component={Steps.Step0}/>
            <Route exact path='/step1' component={Steps.Step1}/>
            <Route exact path='/step2' component={Steps.Step2}/>
            <Route exact path='/step3' component={Steps.Step3}/> 
            <Route exact path='/step4' component={Steps.Step4}/>
        </Switch>
        <footer style={{marginTop: '50px'}}>
            <Link to='/'> Contents </Link>
        </footer>
        </main>
    </BrowserRouter>
, document.getElementById('root'));
