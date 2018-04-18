import React, { Component } from 'react'
import { Paper } from 'material-ui'
class componentName extends Component {
  render () {
    return (
      <Paper elevation={0} style={{ height: window.innerHeight }}>
        <img
          width='100%'
          height='100%'
          style={{
            verticalAlign: 'middle'
          }}
          alt='test'
          src={require('../../assets/room/wallhaven-121440.jpg')}
        />
      </Paper>
    )
  }
}

export default componentName
