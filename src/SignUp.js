import React, { Component } from 'react'
import { connect } from 'react-redux';
import { createAccount,authenticateWithGoogle } from './redux/actions/authAction';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
    handleOnSubmit=(event)=>{
        event.preventDefault();
        let email = event.target.elements.email.value;
        let password = event.target.elements.password.value;
        this.props.createAccount(email,password)
    }
    render() {
        if(this.props.auth.isLoaded && !this.props.auth.isEmpty){
            return <Redirect to="/" />
        }
        return (
            <div>
                <h1>Sign Up</h1>
               <form onSubmit={this.handleOnSubmit}>
                   <div>
                       <label>Email</label>
                       <input type="text" name="email"/>
                   </div>

                   <div>
                   <label>Password</label>
                       <input type="password" name="password"/>
                   </div>

                   <div>
                       <button type="submit">Sign Up</button>
                   </div>
                </form>
                <hr/>
                <button onClick={this.props.authenticateWithGoogle}>Signup with Google</button>
            </div>
        )
    }
}

const mStP = (state)=>{
    return {
        auth:state.firebase.auth
    }
}
export default connect(mStP,{createAccount,authenticateWithGoogle})(SignUp)
