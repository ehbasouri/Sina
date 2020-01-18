import React, { useState } from 'react';
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { updateGeneralProps } from '../../../redux/actions';
import { ORDERS } from '../../../const/reducers';
import Collapse from '@material-ui/core/Collapse';

function MyDialogContent({
  updateGeneralProps,
  handleClose,
  selectedBeer,
  orders
}) {

  const classes = useStyles();

  const [expandedDescription, setExpandedDescription] = useState(false)
  const [expandedfood_pairing, setExpandedfood_pairing] = useState(false)

  function selectedItemIsExist() {
    const selectedId = orders.findIndex(item=>(
      item.id === selectedBeer.id
    ))
    return selectedId
  }

  function onAddClicke() {
    const exist = selectedItemIsExist()
    if(exist > -1){
      orders[exist].count = orders[exist].count + 1;
      updateGeneralProps({
        key: ORDERS,
        value: [...orders]
      })
    }else{
      selectedBeer.count = 1;
      updateGeneralProps({
        key: ORDERS,
        value: [...orders, selectedBeer]
      })
    }
    handleClose()
  }

  function getText(text) {
    const maxlimit = 20
    var ValidText = text
    var more = false
    if((text).length > maxlimit) {
      ValidText = (((text).substring(0,maxlimit-3)) + '...')
      more = true;
    }
    return{text: ValidText, more }
  }

  const description = getText(selectedBeer.description)
  return (
    <Card className={classes.card}>
      <div className={classes.details}>
        <CardContent className={classes.content}>
          <Typography className={classes.nameStyle} component="h5" variant="h5">
            {selectedBeer.name}
          </Typography>
          <Typography className={classes.subtitleStyle}  variant="subtitle1" color="textSecondary">
            {selectedBeer.tagline}
          </Typography>
          <Typography className={classes.subtitleStyle}  variant="subtitle1" color="textSecondary">
            {selectedBeer.abv}
          </Typography>

          {description.more && !expandedDescription && <Typography className={classes.subtitleStyle} variant="subtitle1" color="textSecondary">
              description: {description.text} <div onClick={()=>setExpandedDescription(true)} >show more ...</div>
          </Typography>}
          <Collapse in={expandedDescription} timeout="auto" unmountOnExit>
            <Typography className={classes.subtitleStyle} variant="subtitle1" color="textSecondary">
            description: {selectedBeer.description} 
            </Typography>
          </Collapse>
          {selectedBeer.food_pairing.length > 1 && !expandedfood_pairing &&<Typography className={classes.subtitleStyle} variant="subtitle1" color="textSecondary">
            food_pairing: {selectedBeer.food_pairing[0]} <div onClick={()=>setExpandedfood_pairing(true)} >show more ...</div>
          </Typography>}
          <Collapse in={expandedfood_pairing} timeout="auto" unmountOnExit>
            <div className={classes.subtitleStyle} >food_pairing:</div>
            {selectedBeer.food_pairing.map(item=>(
              <Typography key={item} className={classes.subtitleStyle} variant="subtitle1" color="textSecondary">
                {item}
              </Typography>
            ))}
          </Collapse>
        </CardContent>
      </div>
        
        <div className={classes.mediaMainContainer}>
          <div className={classes.mediaContainer}>
            <CardMedia
              className={classes.cover}
              image={selectedBeer.image_url}
              title="Live from space album cover"
            />
          </div>
          <div
            onClick={onAddClicke}
            className={classes.AddButton}
          >
            ADD TO CART
          </div>
        </div>
    </Card>
  );
}

const MapStateToProps=store=>({
  orders: store.orders
})


export default connect(MapStateToProps,{updateGeneralProps})(MyDialogContent)
