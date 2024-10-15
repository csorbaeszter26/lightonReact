import React from "react";
import "./Elem.css"

export default function Elem (props){
    function katt(){
        props.katt(props.jel)
           
    }

    return(
        <div className={`lampa${props.jel?"fel":"le"}`} onclick={()=>katt()}></div>
    )
}