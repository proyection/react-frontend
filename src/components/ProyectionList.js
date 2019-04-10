import React from 'react'
import ProyectionCard from './ProyectionCard';
import ProyectionActionButton from './ProyectionActionButton';

const ProyectionList = ({title, cards, listID}) => {
  return (
    <div style={styles.container}>
      <h4>{title}</h4>
      { cards.map(card =>  (
      <ProyectionCard key={card.id} text={card.text} />
      ))}
      <ProyectionActionButton listID={listID} />
    </div>
  )
}

const styles = {
    container: {
        backgroundColor: '#dfe3e6',
        borderRadius: 3,
        width: 300,
        padding: 8,
        height: "100%",
        marginRight: 8
    }
}
export default ProyectionList;
