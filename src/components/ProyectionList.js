import React from 'react'
import ProyectionCard from './ProyectionCard';

const ProyectionList = ({title}) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      <ProyectionCard />
    </div>
  )
}

const styles = {
    container: {
        backgroundColor: '#ccc',
        borderRadius: 3,
        width: 300,
        padding: 8
    }
}
export default ProyectionList;
