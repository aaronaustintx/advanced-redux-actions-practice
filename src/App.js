import React from 'react';
import CounterButton from "./components/CounterButton";
import CounterButtonContainer from "./containers/CounterButtonContainer"
import SpecialTextBox from "./containers/SpecialTextBoxContainer";
import Counter from "./containers/CounterContainer";
import SpecialText from "./containers/SpecialTextContainer";
import UserButtons from "./components/UserButtons";
import Thermostat from "./components/Thermostat";
import Users from "./components/Users";
import ChangeTemperature from "./components/ChangeTemperature";
import VideoPlayer from "./components/VideoPlayer";
import VideoTextBox from "./components/VideoTextBox";
import CurrentCity from "./components/CurrentCity";
import CityDropDown from "./components/CityDropDown";
import SearchTextBox from "./components/SearchTextBox";
import SortUsers from "./components/SortUsers";
import ScaleVideo from "./components/ScaleVideo";
import Modal from "./components/Modal";
import ShowModal from "./components/ShowModal";
import SpecialTextBoxContainer from './containers/SpecialTextBoxContainer';
import SpecialTextContainer from './containers/SpecialTextContainer';
import UserButtonContainer from './containers/UserButtonContainer';
import UserContainer from './containers/UsersContainer';
import ThermostatContainer from './containers/ThermostatContainer';
import ChangeTempContainer from './containers/ChangeTempContainer';
import CityDropDownContainer from './containers/CityDropDownContainer';
import CurrentCityContainer from './containers/CurrentCityContainer';
import ShowModalContainer from './containers/ShowModalContainer';
import ModalContainer from './containers/ModalContainer';

function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButtonContainer />
          <br />
          {/* <SpecialTextBoxContainer /> */}
          <SpecialTextBox />
          <br />
          {/* <UserButtons /> */}
          <UserButtonContainer />
          <br />
          {/* <CityDropDown /> */}
          <CityDropDownContainer />

           <br />
          {/* <ChangeTemperature /> */}
          <ChangeTempContainer />

          <br />
          <SearchTextBox />
          <br />
          <VideoTextBox />
          <br />
          <SortUsers />
          <br />
          <ScaleVideo />
          <br />
          {/* <ShowModal /> */}
          <ShowModalContainer />

        </div>
        <div className="container">
          <Counter />
          <br />
          <SpecialText />
          {/* <SpecialTextContainer /> */}
          <br />
          {/* <CurrentCity /> */}
          <CurrentCityContainer />

          <br />
          {/* <Thermostat /> */}
          <ThermostatContainer />
          <br />
          <VideoPlayer />
          <br />
          
          
        </div>
        <div className="container">
          {/* <Users /> */}
          <UserContainer />

        </div>
        {/* <Modal /> */}
        <ModalContainer />

      </div>
  );
}
export default App;