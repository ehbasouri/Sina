import React from 'react';
import SwipeableBottomSheet from 'react-swipeable-bottom-sheet';
import { styles } from './style';
import { connect } from 'react-redux'
import CartItem from "../cartItem/CartItem.jsx";
import Button from '@material-ui/core/Button';
import GridList from '@material-ui/core/GridList';

function getTotal(orders) {
    var total = 0;
    for (let i = 0; i < orders.length; i++) {
        total = orders[i].abv * orders[i].count + total
    }
    return Math.round( total * 10 ) / 10;
}

class SheetComponent extends React.Component {
  constructor(props){
		super(props);

		this.state = {
			open: false
		};
	};

	openBottomSheet(open){
		this.setState({ open });
    };
    
    onOpenDrawerClick=()=>{
        if (this.props.orders.length > 0) {
            this.openBottomSheet(true)
        }
    }

	render () {

        const { orders } = this.props;

		return (
			<SwipeableBottomSheet
                bodyStyle={styles.bodyStyle}
                topShadow={false}
                open={this.state.open}
                onChange={this.openBottomSheet.bind(this)}
                overflowHeight={ orders.length === 0 ? 48 : 128}
                marginTop={128}
                    >
				<div style={styles.buttonStyle}>
                    <div onClick={this.onOpenDrawerClick} 
                        style={styles.swipeButton}>
                       <div style={styles.center}>
                            <div style={styles.sheetButton}/>
                       </div>
                        <div style={styles.center}>
                            <div style={styles.textStyle}>
                                Shopping Cart
                            </div>
                        </div>
                    </div>
                    <GridList cellHeight={orders.length > 0 ? window.innerHeight * 2 / 3 : 0 } cols={1}>
                        <div style={{ marginTop: 48 }} >
                            {orders.map(item=>(
                                <CartItem key={item.id} item={item} />
                            ))}
                            {orders.length > 0 &&<div style={{...styles.center, paddingTop: 20, flexDirection: "column"}} >
                                <div style={styles.textContainer}>
                                    <div style={styles.textStyle} >Subtotal</div>
                                    <div style={styles.textStyle} >${getTotal(orders)}</div>
                                </div>
                                <div style={styles.textContainer}>
                                    <div style={styles.textStyle} >Tips</div>
                                    <div style={styles.textStyle} >$2</div>
                                </div>
                                <div style={{...styles.textContainer, marginTop: 30}}>
                                    <div style={{...styles.textStyle, fontSize: 20}} >Total</div>
                                    <div style={{...styles.textStyle, fontSize: 20}} >$ {getTotal(orders) + 2} </div>
                                </div>
                                <Button 
                                    style={styles.confirmButton}>
                                    Confirm Payment
                                </Button>
                            </div>}
                        </div>
                    </GridList>
				</div>
			</SwipeableBottomSheet>
		);
	}
};

const MapStateToProps=store=>({
    orders: store.orders
})

export default connect(MapStateToProps)(SheetComponent);