import PropTypes from 'prop-types';
import { useState } from 'react';
function ProjectCard(props) {

  const [isHover,setIsHover]=useState();

    const styles={
        borderStyle:"solid",
        borderRadius:"15px",
        borderColor: isHover? "white":"#97949c2b",
        borderWidth:"5%",
        padding:"1rem 1rem 1rem 1rem",
        backgroundSize: "cover",
        cursor:"pointer",
        
    }

    const imgStyle={
      width:"100%",
      height:"100%",
      borderRadius:"15px",
      borderStyle:"solid",
      borderWidth:"thin"
    }

    const nameStyle={
      position:"relative",
      color:"pink",
      top:"-50%",
      right:"-50%"
    }

//background: isHover?"linear-gradient(rgba(255, 255, 255, 0.5), rgba(255, 255, 255, 0.5))" : "linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5))",

  const handleMouseEnter = ()=>{
      setIsHover(true);
  } 
  const handleMouseLeave = ()=>{
      setIsHover(false);
  } 


  return (
    <div style={styles} onMouseEnter={handleMouseEnter}
    onMouseLeave={handleMouseLeave}
    >
    <img src={props.imageSrc} style={imgStyle} alt="" />
    <p style={nameStyle}>{props.projName}</p>
    </div>
  )
}

ProjectCard.propTypes={
  imageSrc:PropTypes.string,
  projName:PropTypes.string,
}

export default ProjectCard