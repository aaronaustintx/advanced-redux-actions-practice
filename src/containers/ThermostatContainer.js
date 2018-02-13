import { connect } from 'react-redux';
import {setTemp} from "../actions";
import Thermostat from "../components/Thermostat";


//map a prop called text to the state specialText
function mapStateToProps(state){
  return {
    temp: state.currentTemp
  }
}

// const SpecialTextContainer= connect(
// mapStateToProps
// //put component name 
// )(SpecialText);
// export default SpecialTextContainer;

//map to props and the component 
export default connect(mapStateToProps)(Thermostat);


