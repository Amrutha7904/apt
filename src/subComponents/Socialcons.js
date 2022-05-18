import React from 'react'
import { NavLink } from 'react-router-dom'
import styled from 'styled-components'
import { Facebook, Github,Twitter, YouTube } from '../components/AllSvgs'
import {DarkTheme} from "../components/Themes";


 const Icons = styled.div`
 display:flex;
 flex-direction:column;
 align-items:center;

 position:fixed;
 bottom:0;
 left:2rem;


 z-index:3;
 &>*::not(:last-child){
     margin:0.5rem 8rem;

 }
 `

 const Line = styled.span`
 width:2px;
 height:8rem;
 background-color:${props => props.color === "dark" ? DarkTheme.text : DarkTheme.body};
 `
const Socialcons = (props) => {
  return (
    <Icons>
        <div>
            <NavLink styled={{color:"inherit"}} target="_blank" to={{pathname:"https://github.com/Amrutha7904"}}>
                <Github width={25} height={25} fill={props.theme === 'dark' ?  DarkTheme.text : DarkTheme.body}/>
            </NavLink>
            </div>
            <div>
            <NavLink styled={{color:"inherit"}}target="_blank" to={{pathname:"https://twitter.com/Amruthaos1"}}>
                <Twitter width={25} height={25} fill={props.theme === 'dark'? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
            </div>
            <div>
            <NavLink styled={{color:"inherit"}} target="_blank" to={{pathname:"https://facebook.com/Amruthasanand"}}>
                <Facebook width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body}/>
            </NavLink>
            </div>
            <div>
            <NavLink styled={{color:"inherit"}} target="_blank" to={{pathname:"https://youtube.com/Amzvibes"}}>
                <YouTube width={25} height={25} fill={props.theme === 'dark' ? DarkTheme.text : DarkTheme.body }/>
            </NavLink>
            </div>

       <Line color={props.theme}/>
    </Icons>
  )
}

export default Socialcons