import React from 'react'
import { Link } from 'react-router-dom'
import AddAccount from './AddAccount';

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

                <tr>
                    <td>Bob Marley</td>
                    <td>278044403040</td>
                    <td>Jamaican National Bank</td>
                    <td>Wee Junction</td>
                </tr>
            </table>
            </div>
        )
    }
}

export default Home;