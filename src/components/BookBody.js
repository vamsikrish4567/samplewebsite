import React, {Component} from "react";

import { BsFillCaretLeftFill } from "react-icons/bs";



class BookBody extends Component {
    constructor(props){
        super(props);
    }
    render(){

        let videosText = React.createElement("label",{

        }, "Videos")
        let backButton = <BsFillCaretLeftFill />
        let videosBlock = React.createElement("div",{
            style:{
                display: "flex",
                alignItems:"center",
                height: "25px",
                paddingLeft: "20px",
                paddingTop: "20px"
            }
        }, backButton, videosText)

        let urlInput = React.createElement("input",{
            style:{
                width: "70%",
                margin: "7%",
                marginLeft: "15%",
                marginBottom: "20px",
                height: "25px",
                borderRadius: "6px",
                borderColor: "transparent",
                paddingLeft: "10px"
            },
            placeholder: "Insert URL here"
        })

        let orLabel = React.createElement("label",{
            style:{
                fontWeight: "bold"
            }
        },"or")

        let uploadBlock = React.createElement("div",{
            style:{
                width:"200px",
                height: "200px",
                backgroundColor: "white",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                marginLeft: "15%",
                marginTop: "20px",
                fontWeight: "bold"
            }
        },"upload")

        return(
            <div style={{
                display: "flex",
                width: "100%",
                backgroundColor: "white",
                flexDirection: "column"
            }}>
                <div style={{
                    height: "100px",
                    padding: "5px",
                    borderBottom: "1px solid white"
                }}>
                </div>
            
                <div style={{
                    display: "flex",
                    height: "calc(100% - 111px)",
                    backgroundColor: "#f4f5f7",
                    flexDirection: "column"
                }}>
                    {videosBlock}
                    {urlInput}
                    {orLabel}
                    {uploadBlock}
                </div>
            </div>
        )
    }
  }
  
  export default BookBody;