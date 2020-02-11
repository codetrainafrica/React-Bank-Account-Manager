import React, { Component } from 'react'
import { connect} from 'react-redux'
import { addNewAccount } from './redux/actions'
import { bindActionCreators } from 'redux'
import { Link } from 'react-router-dom'

class AddAccount extends Component {
    addAccount = (event)=>{
        event.preventDefault()
        let account = {
            id: Math.random().toString(36).substr(2, 5),
            accountName:event.target.elements.accountName.value,
            accountNumber:event.target.elements.accountNumber.value,
            bankName:event.target.elements.bankName.value,
            bankBranch:event.target.elements.bankBranch.value,
        }
        this.props.addNewAccount(account)
        this.props.history.push('/')
    }
    render() {
        return (
            
            <form onSubmit={this.addAccount}>
                <Link to="/">
                    <p>Accounts</p>
                </Link>
                <h1>Add new Account</h1>
                <div>
                    <label>Account Name</label>
                    <input type="text" name="accountName"/>
                </div>
                <div>
                    <label>Account Number</label>
                    <input type="text" name="accountNumber"/>
                </div>
                <div>
                    <label>Bank Name</label>
                    <input type="text" name="bankName"/>
                </div>
                <div>
                    <label>Bank Branch</label>
                    <input type="text" name="bankBranch"/>
                </div>
                <button type="submit">Add Account</button>
            </form>
        )
    }
}

const mapDispatchToProps = {
    addNewAccount
}

export default connect(null, mapDispatchToProps)(AddAccount)