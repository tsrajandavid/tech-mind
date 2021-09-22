import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from 'react-router-dom'
import SignIn from '../account/SignIn'
import SignUp from '../account/SignUp'
import dashboard from '../admin/dashboard/dashboard'
import PostList from '../admin/post/PostList'
import Home from '../home/Home'
export default function Rotuting() {
    return (
        <>
            <Switch>
                <Route path="/" exact component={SignIn}></Route>
                <Route path="/sign-in" exact component={SignIn}></Route>
                <Route path="/sign-up" exact component={SignUp}></Route>
                <Route path="/home" exact component={Home} d></Route>
                <Route path="/dashboard" exact component={dashboard}></Route>
                <Route path="/post" exact component={PostList}></Route>
            </Switch>
        </>
    )
}
