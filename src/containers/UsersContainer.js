import { connect } from 'react-redux';
import Users from '../components/Users';
import {addUser} from '../actions/index.js'
import {removeUser} from '../actions/index.js'

     function mapStateToProps(state){
    return{
        // this is the prop - must use prop name
        users:state.users
     }
    }  

const UsersContainer= connect(
 mapStateToProps
 //put component name 
)(Users);
export default UsersContainer