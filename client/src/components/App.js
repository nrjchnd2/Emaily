import React from 'react';
import {BrowserRouter,Route} from 'react-router-dom';
import {connect} from 'react-redux';

import Header from './Header';
import Landing from './Landing';
import {fetchUser} from '../actions'


const SurveyNew=()=><h2>SurveyNew</h2>
const Dashboard=()=><h2>Dashboard</h2>

class App extends React.Component {
    componentDidMount(){
        this.props.fetchUser();
    }
    render(){
        return(
            <div className="container">
                <BrowserRouter>
                    <div>
                        <Header/>
                        <Route path="/" exact component={Landing}/>
                        <Route path="/surveys" exact component={Dashboard}/>
                        <Route path="/surveys/new"  component={SurveyNew}/>
                    </div>
                </BrowserRouter>
            </div>
        );
    }
}

export default connect(null,{fetchUser})(App);