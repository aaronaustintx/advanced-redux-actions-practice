import { connect } from 'react-redux';
import {setIsLoading} from "../actions";
import LoadingModal from "../components/Modal";
import ShowModal from '../components/ShowModal';


//map a prop called  to the state 
function mapStateToProps(state){
  return {
    isLoading: state.isLoading
  }
}

function mapDispatchToProps(dispatch){
    return {
     setIsLoading:function(isLoading){
       let action = setIsLoading(isLoading);
       dispatch(action);
     }
    }
  }



export default connect(mapStateToProps, mapDispatchToProps)(LoadingModal);

