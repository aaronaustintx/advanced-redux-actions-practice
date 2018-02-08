import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';
import {increaseCounter} from '../actions/index.js'
import {decreaseCounter} from '../actions/index.js'


// because cares about change - no need to map to props
// function mapStateToProps(state){
//  return{
//    increaseCount:state.increaseCount
//  }
// }

function mapDispatchToProps(dispatch){
    return {
      increase:function(){
          // has to match up with the increaseCounter action
        var action = increaseCounter();
        
        dispatch(action);
      },

      decrease:function(){
        // has to match up with the increaseCounter action
      var action = decreaseCounter();
      
      dispatch(action);
    }

    }
    }
    

const CountButtonContainer= connect(null,
 mapDispatchToProps
 //put component name 
)(CounterButton);
export default CountButtonContainer
