import React from 'react';
import SwipeableViews from 'react-swipeable-views';
import MyTabs from '../common/myTab/MyTabs.jsx';
import BeerView from './BeerView';
import { getBeers } from '../../utils/Api';
import { updateGeneralProps } from '../../redux/actions';
import { BEERS } from '../../const/reducers';
import { connect } from 'react-redux';
import Fab from '@material-ui/core/Fab';
import Tooltip from '@material-ui/core/Tooltip';
import SortOutlinedIcon from '@material-ui/icons/SortOutlined';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import DialogTitle from '@material-ui/core/DialogTitle';
import Dialog from '@material-ui/core/Dialog';
import ListItemText from '@material-ui/core/ListItemText';
import { THEME } from '../../const/theme';
import { styles } from './style'

class BeerComponent extends React.Component {
  state = {
    index: 0,
    opendialog: false,
    sortByAll: null, 
    sortByPizza: null, 
    sortBySteak: null
  };
  
  componentDidMount() {
    this.getBeersfnc()
  }

  getBeersfnc=()=>{
    getBeers(1,27)
      .then(res=>{
        this.setState((state)=>{
          return{

          }
        })
        this.props.updateGeneralProps({
          key: BEERS,
          value: res.data
        })
      }).catch(err=>console.log(err))
  }

  handleChange = (event, value) => {
     this.setIndex(value);
  };

  setIndex=(index)=>{
      this.setState({index});
  }

  handleChangeIndex = index => {
    this.setIndex(index);
  };

  handleClose=()=>{
    this.setState({ opendialog: false })
  }

  onSortItemClick=(value)=>{
    this.setState({opendialog: false},()=>{
      const {index} = this.state;
      if (index === 0) {
        this.setState({ sortByAll: value })
      } else if (index === 1) {
        this.setState({ sortByPizza: value })
      } else {
        this.setState({ sortBySteak: value })
      }
    })
  }

  render() {
    const { index, sortByAll, sortByPizza, sortBySteak } = this.state;

    return (
      <div>
        <Dialog  onClose={this.handleClose} aria-labelledby="simple-dialog-title" open={this.state.opendialog}>
          <div
            style={{ backgroundColor: THEME.dark_color, padding: 20 }}
          >
            <DialogTitle style={styles.textStyle} id="simple-dialog-title">Sort beers by:</DialogTitle>
            <List>
              <ListItem onClick={()=>this.onSortItemClick(0)} autoFocus button >
                <ListItemText style={styles.textStyle}  primary={"abv_ascending"} />
              </ListItem>
              <ListItem onClick={()=>this.onSortItemClick(1)} autoFocus button >
                <ListItemText style={styles.textStyle} primary={"abv_descending"} />
              </ListItem>
              <ListItem onClick={()=>this.onSortItemClick(2)} autoFocus button >
                <ListItemText style={styles.textStyle} primary={"name_ascending"} />
              </ListItem>
              <ListItem onClick={()=>this.onSortItemClick(3)} autoFocus button >
                <ListItemText style={styles.textStyle} primary={"name_descending"} />
              </ListItem>
            </List>
          </div>
        </Dialog>
          <div style={styles.innerTab} > 
            <MyTabs
                title="ALL"
                currentIndex={0}
                index={index}
                onClick={this.setIndex}
            />
            <MyTabs
                title="PIZZA"
                currentIndex={1}
                index={index}
                onClick={this.setIndex}
            />
            <MyTabs
                title="STEAK"
                currentIndex={2}
                index={index}
                onClick={this.setIndex}
            />            
          </div>
        <SwipeableViews index={index} onChangeIndex={this.handleChangeIndex}>
            <BeerView sortBy={sortByAll} type="ALL" />
            <BeerView sortBy={sortByPizza} type="PIZZA" />
            <BeerView sortBy={sortBySteak} type="STEAK" />
        </SwipeableViews>

        <Tooltip title="Add" 
          onClick={()=>this.setState({ opendialog: true })}
          style={styles.tooltip} 
          aria-label="add">
          <Fab color="secondary" style={styles.fabStyle}>
            <SortOutlinedIcon/>
          </Fab>
        </Tooltip>
      </div>
    );
  }
}

export default connect(null,{updateGeneralProps})(BeerComponent);