import React from 'react';
import { Switch } from 'react-router-dom';
import Route from './Route';

import SignIn from '~/pages/SignIn';
import SignUp from '~/pages/SignUp';

import Teacher from '~/pages/Teacher';
import Profile from '~/pages/Profile';
import Subject from '~/pages/Subject';
import Classroom from '~/pages/Classroom';
import Student from '~/pages/Student';

export default function Routes() {
    return (
        <Switch>
            <Route path="/" exact component={SignIn} />
            <Route path="/register" component={SignUp} />

            <Route path="/teachers" component={Teacher} isPrivate />
            <Route path="/profile" component={Profile} isPrivate />
            <Route path="/subject" component={Subject} isPrivate />
            <Route path="/classroom" component={Classroom} isPrivate />
            <Route path="/student" component={Student} isPrivate />
        </Switch>
    );
}
