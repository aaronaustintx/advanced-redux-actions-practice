import { connect } from 'react-redux';
import Users from '../components/Users';
import {addUser} from '../actions/index.js'
import {removeUser} from '../actions/index.js'



// function mapDispatchToProps(dispatch){
//     return {
//       increase:function(){
//         var action = Counter();
//         dispatch(action);
//       }
//     }
//     }
    

  function mapStateToProps(state){
    return{
        // this is the prop
        users:state.Users
     }
    }  

const UsersContainer= connect(
 mapStateToProps
 //put component name 
)(Users);
export default UsersContainer