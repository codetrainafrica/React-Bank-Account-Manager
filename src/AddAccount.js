import React, { Component } from 'react'

export default class AddAccount extends Component {
    render() {
        return (

            <form>
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
