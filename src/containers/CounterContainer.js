import { connect } from 'react-redux';
import Counter from '../components/Counter';
import Count from '../actions/index.js'



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
        count:state.currentCount
     }
    }  

const CounterContainer= connect(
 mapStateToProps
 //put component name 
)(Counter);
export default CounterContainer