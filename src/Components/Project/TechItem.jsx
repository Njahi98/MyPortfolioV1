
  import React from 'react'
  
  function TechItem({ Icon, name }) {
    return (
        <div style={{ display: 'flex', alignItems: 'center', margin: '5px', color: 'white' }}>
        <Icon size={24} style={{ marginRight: '10px' }} />
        <span>{name}</span>
      </div>
    )
  }
  
  export default TechItem