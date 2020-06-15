import React from 'react'; 
import './App.css';



//component
import Button from "@material-ui/core/Button";
import Slider from "@material-ui/core/Slider";

import Switch from "@material-ui/core/Switch";


//icon
import Favorite from "@material-ui/icons/Favorite";
import DeleteForever from "@material-ui/icons/DeleteForever";
import Camera from "@material-ui/icons/Camera";


//sound
import like from './sounds/state-change_confirm.wav'
import trash from "./sounds/trash_transition.wav";
import camera from "./sounds/ui_camera_shutter.wav";

import slide from "./sounds/navigation_hover.wav";

import open from "./sounds/ui_lock.wav";
import close from "./sounds/ui_unlock.wav";



//file
const likeAudio = new Audio(like);
const trashAudio = new Audio(trash);
const cameraAudio = new Audio(camera);

const slideAudio = new Audio(slide);

const openAudio = new Audio(open);
const closeAudio = new Audio(close);






function App() {


  const playSound = audioFile => {
    audioFile.play();
  }


  const [state, setState] =React.useState({
    checked: true
  })


  const toggleSwitch = name => event => {
    if (event.target.checked) {
      playSound(closeAudio);
    } else {
      playSound(openAudio);
    }
    setState({...state, [name]: event.target.checked})
  }


  return (
    <div className="App">

      <Button
        onClick={()=>playSound(likeAudio)}
        variant="contained"
        color="primary">
        <Favorite />
      </Button>

      <Button
        onClick={()=>playSound(trashAudio)}
        variant="contained"
        color="secondary">
        <DeleteForever />
      </Button>


      <Button
        onClick={()=>playSound(cameraAudio)}
        variant="contained"
        color="primary">
        <Camera />
      </Button>


      <Slider onChangeCommitted={() => playSound(slideAudio)} />


      <Switch checked={state.checked} onChange={toggleSwitch("checked")} />

    </div>

  )
}

export default App;
