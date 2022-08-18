import './Controls.css'

export default function Controls(props) {
    return (
        <>
            <p className='switch--type'>Power</p>
            <label className="switch--button">
              <input type="checkbox" onClick={props.toggle}/>
              <span className="slider--point"></span>
            </label>
            <p className='switch--type'>Displayer</p>
            <div className='display--screen'>
              {props.active && <p className='text--displayed'>{props.currentSound}</p>}
            </div>
            <p className='switch--type'>Volume</p>
            <input
                  type="range"
                  step='0.01'
                  max="1"
                  min="0"
                  className="volume--slider"
                  value={props.value}
                  onChange={props.handleChange}
                  >  
            </input>
            <div className='display--screen'>
              {props.active && <p className='text--displayed'>Volume: {props.value * 100}</p>}
            </div>
        </>
    )
}