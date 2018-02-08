import { connect } from 'react-redux';
import CounterButton from '../components/CounterButton';
import {increaseCounter} from '../actions/index.js'

// because cares about change - no need to map to props
// function mapStateToProps(state){
//  return{
//    increaseCount:state.increaseCount
//  }
// }

function mapDispatchToProps(dispatch){
    return {
      increase:function(){
        var action = increaseCounter();
        dispatch(action);
      }
    }
    }
    

const CountButtonContainer= connect(null,
 mapDispatchToProps
 //put component name 
)(CounterButton);
export default CountButtonContainer
