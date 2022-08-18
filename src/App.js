import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap-icons/font/bootstrap-icons.css';
import { useState } from 'react';
import Data from './Data';
import Keys from './Components/Keys'
import Footer from './Components/Footer';
import Controls from './Components/Controls';


function App() {
  const [sound, setSound] = useState(Data)
  const [volume, setVolume] = useState(.5)
  const [sounds, setSounds] = useState("")
  const [isOn, setIsOn] = useState(false)

  const currentNote = (id) => {
    setSounds(prev => {
      return isOn ? id : prev
    })
  }
    
  const allSounds = sound.map(clip => {
    return (
      <Keys 
        clip={clip}
        volume={volume}
        handleClick={() => currentNote(clip.id)}
        active={isOn}
      />
    )
  })

  return (
    <main className='main-container'>
      <div className="drum-machine">
        <div className="display">
          <div className="buttons--container">
            {allSounds}
          </div>
          <div className="control--container">
            <Controls
              handleChange={e => setVolume(e.target.value)}
              value={volume}
              currentSound={sounds}
              toggle={() => setIsOn(!isOn)}
              active={isOn}
            />
          </div>
        </div>
        <Footer />
      </div>
    </main>
  )
}

export default App;
