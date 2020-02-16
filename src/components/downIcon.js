import React, { Component } from 'react';

const DownIcon=(props) => {
    return(
        <div style={{
            display:"flex",
            alignItems:"center",
            justifyContent:"center",
            marginBottom:"-35px",
            transform:"translateY(-85px)",
            backgroundColor:"transparent"
          }}>
            <img src={props.icon} alt="" style={{
              width:"30px"
            }}/>
          </div>
    )
}

export default DownIcon