import React from 'react'
import ProyectionCard from './ProyectionCard';
import ProyectionActionButton from './ProyectionActionButton';
import { Droppable } from 'react-beautiful-dnd';
import styled from 'styled-components';

const ListContainer = styled.div`
  background-color: #dfe3e6; 
  border-radius: 3px;
  width: 300px;
  padding: 8px;
  height: "100%";
  margin-right: 8px;
`

const ProyectionList = ({title, cards, listID}) => {
  return (
    <Droppable droppableId={String(listID)}>
      {provided => (
        <ListContainer 
          {...provided.droppableProps} 
          ref={provided.innerRef}
        >
          <h4>{title}</h4>
          { cards.map((card, index) =>  (
          <ProyectionCard 
            key={card.id} 
            index={index}
            text={card.text} 
            id={card.id} 
          />
          ))}
          <ProyectionActionButton listID={listID} />
          {provided.placeholder}
        </ListContainer>
      )}
    </Droppable>
  );
}

export default ProyectionList;
