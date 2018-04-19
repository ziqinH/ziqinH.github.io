import React from 'react'
import PropTypes from 'prop-types'
import { withStyles } from 'material-ui/styles'
import GridList, { GridListTile } from 'material-ui/GridList'

const styles = theme => ({
  root: {
    // display: 'flex',
    // flexWrap: 'wrap',
    // justifyContent: 'space-around',
    // overflow: 'hidden',
    width: '140%',
    marginLeft: '-20%'
    // backgroundColor: theme.palette.primary.main
  },
  gridList: {
    // width: '140%',
    // marginLeft: '-20%'
    // height: 450
  }
})

/**
 * The example data is structured as follows:
 *
 * import image from 'path/to/image.jpg';
 * [etc...]
 *
 */

const tileData = [
  {
    img: require('../../assets/room/wallhaven-121440.jpg'),
    title: 'Image',
    cols: 2
  },
  {
    img: require('../../assets/room/wallhaven-121443.jpg'),
    title: 'Image'
  },
  {
    img: require('../../assets/room/wallhaven-121513.jpg'),
    title: 'Image'
  },
  {
    img: require('../../assets/room/wallhaven-176513.jpg'),
    title: 'Image'
  },
  {
    img: require('../../assets/room/wallhaven-260560.jpg'),
    title: 'Image'
  },
  {
    img: require('../../assets/room/wallhaven-260567.jpg'),
    title: 'Image'
  },
  {
    img: require('../../assets/room/wallhaven-349976.png'),
    title: 'Image',
    cols: 2
  }
]

const ImageGridList = props => {
  const { classes } = props

  return (
    <div style={{ overflow: 'hidden' }}>
      <div className={classes.root}>
        <GridList
          cellHeight={window.innerHeight / 3 - 3}
          className={classes.gridList}
          cols={3}
        >
          {tileData.map(tile => (
            <GridListTile key={tile.img} cols={tile.cols || 1}>
              <img src={tile.img} alt={tile.title} />
            </GridListTile>
          ))}
        </GridList>
      </div>
    </div>
  )
}

ImageGridList.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ImageGridList)
