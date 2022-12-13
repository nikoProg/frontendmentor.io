import React from 'react'
import ReactDOM from 'react-dom'

class Toggle extends React.Component {
    state = {
      toggle: false
    }
  
    toggle () {
      this.setState({ toggle: !this.state.toggle })
    }
  
    render () {
      const className = `toggle-component ${ this.state.toggle ? ' active' : ''}`
      return (
        <div
          className={className}
          onClick={() => this.toggle()}>
          <div className='toggle-button' />
        </div>
      )
    }
  }
  
  export default Toggle;