import React, { Component } from 'react'
import { Route, Redirect } from 'react-router-dom'
import { connect } from 'react-redux'

class ProtectedRoute extends Component {
    render() {
        const {component:Component, ...rest} = this.props
        console.log(this.props.auth)
        if(!this.props.auth.isLoaded)return null;
        return (
            <div>
               <Route {...rest} render={(props)=>{
                   if(!this.props.auth.isEmpty){
                        return <Component {...props} />
                   }else{
                        return <Redirect to="/login"/>
                   }
                   
               }} />
            </div>
        )
    }
}

const mStP = (state)=>{
    return {
        auth:state.firebase.auth
    }
}
export default connect(mStP) (ProtectedRoute)
