import React from 'react'
import styled from 'styled-components'
import Me from '../assets/Images/profile-image-1.png'
import { motion } from 'framer-motion'



const Box = styled(motion.div)`

left:50%;
top:50%;
transform:translate(-50%, -50%);
position:absolute;
width:59vw;
display:flex;
height:55vh;
// below radient is to create to 2 color border


background:linear-gradient( to right,
    ${props => props.theme.body} 50%,
    ${props => props.theme.text} 50%) bottom,
    linear-gradient( to right,
        ${props => props.theme.body} 50%,
        ${props => props.theme.text} 50%) top;
        background-repeat:no-repeat;
background-size:100% 2px;
border-left:2px solid ${props => props.theme.body};
border-right:2px solid ${props => props.theme.text};

z-index:1;
        
`
 const SubBox = styled.div`
 width:50%;
 position:relative;
 display:flex;

 .pic{
  position:absolute;
  bottom:0;
  left:50%;
  transfrom:translate(-50%,0);
  width:100%;
  height:auto;
 }
 `
 const Text = styled.div`
 font-size:calc(1rem + 1.5rem);
 color:${props => props.theme.body};
 padding:2rem;
 cursor:pointer;
 display:flex;
 flex-direction:column;
 justify-content:space-evenly;

 &>*:last-child(
     color:${props => `rgba(${props.theme.bodyRgba}, 0.6)`};
     font-size:calc(0.5rem + 1.5rvw);
     font-weight:300;
 )

 `


const Intro = () => {
  return (
    <Box
    initial={{height:0}}
    animate={{height:'55vh'}}
    transition={{ type: 'spring', duration:2, delay:1}}
    >
     <SubBox>
         <Text>
             <h1>Hi,</h1>
             <h3>I'm Amrutha O S.</h3>
             <h6>I design and code simple yet beautiful websites.</h6>
         </Text>
     </SubBox>
     <SubBox>
         <motion.div
         initial={{opacity:0}}
         animate={{opacity:1}}
         transition={{ duration:1, delay:2}}
         >

             <img className='pic' src={Me} alt='profile picture'/>
         </motion.div>
     </SubBox>
    </Box>
  )
}

export default Intro