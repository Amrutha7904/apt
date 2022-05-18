import React from 'react'
import Particles from 'react-particles-js'
import styled from 'styled-components'

// particles config file
import ConfigDark from '../config/particlesjs-config.json';
import ConfigLight from '../config/particlesjs-config-light.json';


const Box =styled.div`
position:absolute;
top:0;
right:0;
left:0;
bottom:0;
z-index:0;

`

const ParticleComponent = (props) => {
  return (
    <Box>
        <Particles style={{position:'absolute', top:'0'}} params={props.theme ==="light" ? ConfigLight : ConfigDark}/>
    </Box>
  )
}

export default ParticleComponent