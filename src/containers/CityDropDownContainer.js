import { connect } from 'react-redux';
import {setCity} from "../actions/index.js";
import CityDropDown from "../components/CityDropDown";


function mapDispatchToProps(dispatch){
  return {
   set:function(text){
     let action = setCity(text);
     dispatch(action);
   }
  }
}

export default connect(null,mapDispatchToProps)(CityDropDown);
