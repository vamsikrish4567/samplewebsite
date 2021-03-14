import React, {Component} from "react";

import {AiOutlineUser, AiOutlineSetting} from "react-icons/ai"
import { BiBook } from "react-icons/bi";
import { BsFillHouseDoorFill } from "react-icons/bs";



class TabBar extends Component {
    constructor(props){
        super(props);
    }
    render(){

        let studentsIcon = <AiOutlineUser style={{width:"35px", height:"35px"}} />
        let studentsText = React.createElement("label",{
            style:{
                fontWeight: this.props.count === 0 ? "bold" : ""
            }
        }, "Students")
        let studentsBlock = React.createElement("div",{
            style:{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "5px",
                height: "80px",
                backgroundColor: this.props.count === 0 ? "#d0e0ed" : "",
                borderLeft: this.props.count === 0 ? "3px solid #3169bf" : ""
            },
            onClick: () => {this.props.onCountChange(0)}
        },studentsIcon, studentsText)

        let bookIcon = <BiBook style={{width:"35px", height:"35px"}} />
        let bookText = React.createElement("label",{
            style:{
                fontWeight: this.props.count === 1 ? "bold" : ""
            }
        }, "Lesson Plan")
        let bookBlock = React.createElement("div",{
            style:{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "5px",
                height: "80px",
                backgroundColor: this.props.count === 1 ? "#d0e0ed" : "",
                borderLeft: this.props.count === 1 ? "3px solid #3169bf" : ""
            },
            onClick: () => {this.props.onCountChange(1)}
        },bookIcon, bookText)

        let settingsIcon = <AiOutlineSetting style={{width:"35px", height:"35px"}} />
        let settingsText = React.createElement("label",{
            style:{
                fontWeight: this.props.count === 2 ? "bold" : ""
            }
        }, "Settings")
        let settingsBlock = React.createElement("div",{
            style:{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "5px",
                height: "80px",
                backgroundColor: this.props.count === 2 ? "#d0e0ed" : "",
                borderLeft: this.props.count === 2 ? "3px solid #3169bf" : ""
            },
            onClick: () => {this.props.onCountChange(2)}
        },settingsIcon, settingsText)

        let homeBlock = React.createElement("div",{
            style:{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
                padding: "5px",
                height: "100px",
                borderBottom: "1px solid white",
                pointerEvents: "none"
            },
            onClick: () => {this.props.onCountChange(2)}
        },<BsFillHouseDoorFill style={{width:"40px", height:"40px"}}/>)

        

        return(
            // <IconContext.Provider value={{ style:{width:"35px", height:"35px"} }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#fafafa",
                width: "120px"
            }}>
                {homeBlock}
               {studentsBlock}
               {bookBlock}
               {settingsBlock}
            </div>
            // </IconContext.Provider>
        )
    }
  }
  
  export default TabBar;