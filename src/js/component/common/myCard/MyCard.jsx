import React from 'react';
import { useStyles } from './style';
import Card from '@material-ui/core/Card';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { updateGeneralProps } from '../../../redux/actions'

function MyCard({
    item,
    handleClickOpen
}) {
  
  const classes = useStyles();

  function onCardClick() {
    handleClickOpen(item)
  }

  const maxlimit = 10;

  return (
        <Card onClick={onCardClick} className={classes.card}>
            <CardMedia
                className={classes.media}
                image={item.image_url}
                title="Paella dish"
            />
            <CardContent>
                <Typography className={classes.textStyle} variant="body2" color="textSecondary" component="p">
                    { ((item.name).length > maxlimit) ? 
                    (((item.name).substring(0,maxlimit-3)) + '...') : 
                    item.name }
                </Typography>
                <Typography variant="body2" color="textSecondary" component="p">
                    {item.abv}
                </Typography>
            </CardContent>
        </Card>
  );
}

export default connect(null,{updateGeneralProps})(MyCard)
