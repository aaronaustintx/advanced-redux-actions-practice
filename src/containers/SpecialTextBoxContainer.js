import { connect } from 'react-redux';
import {setSpecialText} from "../actions/index.js";
import SpecialTextBox from "../components/SpecialTextBox";


function mapDispatchToProps(dispatch){
  return {
   set:function(txt){
     let action = setSpecialText(txt);
     dispatch(action);
   }
  }
}

const SpecialTextBoxContainer = connect(null,mapDispatchToProps)(SpecialTextBox);
export default SpecialTextBoxContainer;
