import React from 'react'
import { Link } from 'react-router-dom'
import { connect} from 'react-redux'
class Home extends React.Component {
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

export default connect(mapStateToProps, {})(Home);
