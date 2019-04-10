import React from 'react'
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

const ProyectionCard = ({text}) => {
  return (
    <Card style={styles.cardContainer}>
      <CardContent>
        <Typography 
            color="textSecondary" 
            gutterBottom
        >
            {text}
        </Typography>
      </CardContent>
    </Card>
  )
}

const styles = {
  cardContainer: {
    marginBottom: 8,
  }
}

export default ProyectionCard;
