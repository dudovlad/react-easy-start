import React from 'react';
import {  Route, Switch } from 'react-router-dom';
import { Menu } from './menu';
import * as Steps from './steps';

export const Main = () => <main>  
    <Switch>
        <Route exact path='/' component={Menu}/>
        <Route exact path='/step0' component={Steps.Step0}/>
        <Route exact path='/step1' component={Steps.Step1}/>
        <Route exact path='/step2' component={Steps.Step2}/>
        <Route exact path='/step3' component={Steps.Step3}/> 
        <Route exact path='/step4' component={Steps.Step4}/>
        <Route exact path='/step5' component={Steps.Step5}/>
        <Route exact path='/step6' component={Steps.Step6}/>
    </Switch>
</main>;