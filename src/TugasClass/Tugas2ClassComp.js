import React from "react";

export default class Tugas2ClassComp extends React.Component{
    constructor(props){
      super(props);
      
      this.state = {
        now: new Date(),
      };
    }
    
    componentDidMount() {
      this.interval = setInterval(this.updateNow.bind(this), 1000);
    }
  
    componentWillUnmount() {
      clearInterval(this.interval);
    }
    
    updateNow(){
      this.setState(Object.assign({}, this.state, {now: new Date()}));
    }
    
    formatClockNum(clock_num){
      return clock_num.toString().padStart(2, '0');
    }
    render(){
      return(
        <>
        <div>
          <h2>{this.formatClockNum(this.state.now.getHours())}:{this.formatClockNum(this.state.now.getMinutes())}:{this.formatClockNum(this.state.now.getSeconds())}</h2>
        </div>
        </>
       
      );
    }
  }
