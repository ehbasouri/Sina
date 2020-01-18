import React from 'react';
import CardMedia from '@material-ui/core/CardMedia';
import DeleteOutlineOutlinedIcon from '@material-ui/icons/DeleteOutlineOutlined';
import { connect } from 'react-redux';
import { updateGeneralProps } from '../../../redux/actions';
import { ORDERS } from '../../../const/reducers';
import {useStyles} from './style'

function CartItem({item, orders, updateGeneralProps}) {

    const classes = useStyles();

    function selectedItemIndex() {
        const selectedId = orders.findIndex(order=>(
            order.id === item.id
        ))
        return selectedId
    }

    function onRemoveClick() {
        if (item.count === 1) {
            onDeletClick()
        }else{
            const selectedIndex = selectedItemIndex();
            orders[selectedIndex].count = orders[selectedIndex].count - 1;
            updateGeneralProps({
                key: ORDERS,
                value: [...orders]
              })
        }
    }

    function onDeletClick() {
        const deletedOrderResult = orders.filter(order=>(order.id !== item.id))
        updateGeneralProps({
            key: ORDERS,
            value: deletedOrderResult
          })
    }

    function onPlusClick() {
        const selectedIndex = selectedItemIndex();
        orders[selectedIndex].count = orders[selectedIndex].count + 1;
        updateGeneralProps({
            key: ORDERS,
            value: [...orders]
            })
    }

    return(
        <div className={classes.summeryContainer}>
            <div className={classes.center} >
                <div className={classes.summeryStyle}>
                    <div className={classes.abvStyle}>
                        $ {item.abv}
                    </div>
                    <CardMedia
                        className={classes.imageStyle}
                        image={item.image_url}
                        title="Paella dish"
                    />
                </div>
                <div className={classes.textStyle} >
                    {item.name}
                </div>
            </div>
            <div className={classes.center}>
                <div className={classes.addMinStyle}>
                    <div onClick={onRemoveClick} className={classes.minesStyle}> - </div>
                    <div className={classes.textStyle}>{item.count}</div>
                    <div onClick={onPlusClick} className={classes.plusStyle}> + </div>
                </div>
                <DeleteOutlineOutlinedIcon onClick={onDeletClick} className={classes.deleteBtn} />
            </div>
        </div>
    )
}



const MapStateToProps=store=>({
    orders: store.orders
  })
  
export default connect(MapStateToProps,{updateGeneralProps})(CartItem)