import React, { useEffect } from 'react';
import { useStyles } from './style';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import MyCard from '../common/myCard/MyCard.jsx';
import MyModal from '../common/myModal/MyModal.jsx';
import { connect } from 'react-redux';
import { updateGeneralProps } from '../../redux/actions';
import { getBeers } from '../../utils/Api';
import { BEERS } from '../../const/reducers';
import Loading from '../common/loading/Loading.jsx';
import { sortByAbv, deSortByAbv, sortByAlpha, deSortByAlpha } from '../../utils/commonFunction';

function BeerView({
  beers,
  updateGeneralProps,
  type,
  sortBy
}) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const [page, setPage] = React.useState(2);
  const [selectedBeer, setSelectedBeer] = React.useState({});
  const [loading, setLoading] = React.useState(true);
  const [beerList, setBeerList] = React.useState([]);

  useEffect(()=>{
    handleSort(sortBy)
  },[beers, sortBy])

  function handleSort(sortByVaue) {
    if (sortByVaue === 0) {
      setBeerList(sortByAbv(beers))
    } else if(sortByVaue === 1) {
      setBeerList(deSortByAbv(beers))
    }else if(sortByVaue === 2) {
      setBeerList(sortByAlpha(beers))
    }else if(sortByVaue === 3) {
      setBeerList(deSortByAlpha(beers))
    }else{
      setBeerList(beers)
    }
  }
  
  const handleClickOpen = (selectedBeer) => {
      selectedBeer && setSelectedBeer(selectedBeer)
      setOpen(true);
    };
    const handleClose = () => {
      setOpen(false);
    };

  function onScrollHandler(e) {
    let element = e.target
    if (element.scrollHeight - element.scrollTop === element.clientHeight) {
      setLoading(true);
      getBeers(page, 27)
        .then(res=>{
          if (res.data.length < 27) {
            setLoading(false)
          }
          setPage(page + 1);
          updateGeneralProps({
            key: BEERS,
            value: [...beers, ...res.data]
          })
        }).catch(err=>{
          setLoading(false)
          console.log(err)
        })
    }
  }


  return (
    <div className={classes.root}>
      <GridList onScroll={onScrollHandler} cellHeight={160} className={classes.gridList} cols={3}>
        <MyModal
          open={open}
          handleClickOpen={handleClickOpen}
          handleClose={handleClose}
          selectedBeer={selectedBeer}
        />
        {beerList.map(tile => (
          <GridListTile key={tile.id} cols={1}>
            <MyCard
              item={tile}
              handleClickOpen={handleClickOpen}
            />
          </GridListTile>
        ))}
        {loading && <Loading />}
      </GridList>
    </div>
  );
}

const MapStateToProps=store=>({
  beers: store.beers
})

export default connect(MapStateToProps, {updateGeneralProps})(BeerView);
