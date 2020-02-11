import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
import { removeAccount } from './redux/actions'
class Home extends React.Component {
    
    deleteAccount = (id)=>{
        this.props.removeAccount(id)
    }
    render(){
        return (
            <div>
                <div>
                <Link to="/add">
                    <p>Add Account</p>
                </Link>
            </div>
            <table>
                <tr>
                    <th>Account Name</th>
                    <th>Account Number</th>
                    <th>Account Bank Name</th>
                    <th>Account Bank Branch</th>
                </tr>

                {this.props.accounts.map(account=>{
                    return (
                    <tr>
                        <td>{account.accountName}</td>
                    <td>{account.accountNumber}</td>
                    <td>{account.bankName}</td>
                    <td>{account.bankBranch}</td>
                    <td>{account.id}</td>
                    <td><a onClick={()=>this.deleteAccount(account.id)}>Delete</a> <a>Edit</a></td>
                    </tr>
                    )
                })}
            </table>
            </div>
        )
    }
}

const mapStateToProps = (state)=>{
    console.log(state)
    return {
        accounts:state
    }
}

const mapDispatchToProps = {
    removeAccount
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
