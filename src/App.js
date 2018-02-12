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

function App() {
  return (
      <div className="App">
        <div className="container">
          <CounterButtonContainer />
          <br />
          {/* <SpecialTextBoxContainer /> */}
          <SpecialTextBox />
          <br />
          <UserButtons />
          <UserButtonContainer />
          <br />
          <CityDropDown />
           <br />
          <ChangeTemperature />
          <br />
          <SearchTextBox />
          <br />
          <VideoTextBox />
          <br />
          <SortUsers />
          <br />
          <ScaleVideo />
          <br />
          <ShowModal />
        </div>
        <div className="container">
          <Counter />
          <br />
          <SpecialText />
          {/* <SpecialTextContainer /> */}
          <UserContainer />
          <br />
          <CurrentCity />
          <br />
          <Thermostat />
          <br />
          <VideoPlayer />
          <br />
          
          
        </div>
        <div className="container">
          <Users />
        </div>
        <Modal />
      </div>
  );
}
export default App;