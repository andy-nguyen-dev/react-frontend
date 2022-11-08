import React from "react";
import ApiService from "./ApiService";

export default class DisplayComponent extends React.Component {

    constructor(props) {
        super(props)
    }
    
    componentDidMount(){
        ApiService.getData().then((data) => {
            console.log(data)
          })
          .catch(function (ex) {
              console.log('Response parsing failed. Error: ', ex);
          });
    }

    render() {
        return (
            <div></div>
        )
    }

}