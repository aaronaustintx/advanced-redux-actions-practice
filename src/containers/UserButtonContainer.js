import { connect } from 'react-redux';
import Users from '../components/Users';
import {addUser} from '../actions/index.js'
import {removeUser} from '../actions/index.js'


// because cares about change - no need to map to props
// function mapStateToProps(state){
//  return{
//    increaseCount:state.increaseCount
//  }
// }

function mapDispatchToProps(dispatch){
    return {
      add:function(user){
          // has to match up with the  action
        var action = addUser(user);
        
        dispatch(action);
      },

      remove:function(){
        // has to match up with the  action
      var action = removeUser();
      
      dispatch(action);
    }

    }
    }
    

const UserButtonContainer= connect(null,
 mapDispatchToProps
 //put component name 
)(Users);
export default UserButtonContainer