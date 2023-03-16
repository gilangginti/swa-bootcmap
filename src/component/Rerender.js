import React, { Component, memo, useCallback, useEffect } from 'react'

class Rerender extends Component {
  render(){
    return (
        <>
        {Array.from(Array(this.props.number)).map((item, idx)=> <div key={idx}>Loop {idx+1}</div>)}
        </>
      )
  }
  
}
export default Rerender