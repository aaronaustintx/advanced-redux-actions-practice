import { connect } from 'react-redux';
import {setTemp} from "../actions/index.js";
import ChangeTemperature from "../components/ChangeTemperature";


function mapDispatchToProps(dispatch){
  return {
   set:function(temp){
     let action = setTemp(temp);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(ChangeTemperature);