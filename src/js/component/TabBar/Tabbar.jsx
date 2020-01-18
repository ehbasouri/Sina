import React, { useRef, useEffect} from 'react';
import Paper from '@material-ui/core/Paper';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import BeerComponent from '../BeerComponent/BeerComponent.jsx';
import SwipeableViews from 'react-swipeable-views';
import LocalCafeOutlinedIcon from '@material-ui/icons/LocalCafeOutlined';
import RestaurantOutlinedIcon from '@material-ui/icons/RestaurantOutlined';
import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import FoodComponent from '../FoodComponent/FoodComponent.jsx';
import { connect } from 'react-redux';
import { useStyles } from './style'


function Tabbar({orders}) {
  const classes = useStyles();
  const ref = useRef(null);
  const [value, setValue] = React.useState(0);
  const [tabWidth, setTabWidth] = React.useState(76);
  
  useEffect(() => {
    window.addEventListener("resize", getTabWidth);
    window.addEventListener("orientationchange", getTabWidth);
    getTabWidth()

  }, [ref.current]);

  useEffect(()=>{
    localStorage.setItem("orders", JSON.stringify(orders))
  },[orders])

  function getTabWidth() {
    const width = ref.current ? ref.current.offsetWidth : 0;
    setTabWidth(width)
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div>
              <div className={classes.tabs}>
                <div onClick={()=>setValue(0)} className={classes.tabIcons} style={{ width: tabWidth}} >
                    <LocalCafeOutlinedIcon/>
                </div> 
                <div onClick={()=>setValue(1)} className={classes.tabIcons} style={{ width: tabWidth}} >
                    <RestaurantOutlinedIcon/>
                </div> 
                <div onClick={()=>setValue(2)} className={classes.tabIcons} style={{ width: tabWidth}} >
                    <SettingsOutlinedIcon/>
                </div> 
                <div onClick={()=>setValue(3)} className={classes.tabIcons} style={{ width: tabWidth}} >
                    <SearchOutlinedIcon/>
                </div> 
              </div>
              <Paper className={classes.root}>
              <Tabs
                  classes={{
                      indicator: classes.indicator,
                      root: classes.root
                  }}
                  value={value}
                  onChange={handleChange}
                  indicatorColor="primary"
                  textColor="primary"
                  centered
              >
                  <Tab label="      " ref={ref} />
                  <Tab label="      " />
                  <Tab label="      " />
                  <Tab label="      " />
              </Tabs>
              </Paper>
        <SwipeableViews
            disabled
            // axis={theme.direction === 'rtl' ? 'x-reverse' : 'x'}
            index={value}
            onChangeIndex={handleChange}
        >            
            <div value={value} index={0}>
                <BeerComponent/>
            </div>
            <div value={value} index={1}>
                <FoodComponent title="ALL FOOD" />
            </div>
            <div value={value} index={2}>
                <FoodComponent title="SETTING" />
            </div>
            <div value={value} index={3}>
                <FoodComponent title="SEARCH" />
            </div>
        </SwipeableViews>
    </div>
  );
}

const MapStateToProps=store=>({
  orders: store.orders
})

export default connect(MapStateToProps)(Tabbar)