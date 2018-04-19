import React from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import Actions from '../../common/actions'
import { AppBar, Toolbar, Typography, Button } from 'material-ui'
import { withStyles } from 'material-ui/styles'
import { Link } from 'react-router-dom'

const styles = theme => ({
  root: {
    flexGrow: 1,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex'
  },
  appToolBar: {
    minHeight: 100
  },
  titleLeftBtn: {
    flex: 2,
    textAlign: 'right'
  },
  titleRightBtn: {
    flex: 2
  },
  title: {
    flex: 1,
    textDecoration: 'none'
  },
  dividerTitle: {
    height: 140,
    lineHeight: '140px',
    backgroundColor: theme.palette.primary.main
  }
})

class MiniDrawer extends React.Component {
  render () {
    const { classes } = this.props
    return (
      <AppBar position='fixed'>
        <Toolbar className={classes.appToolBar}>
          {/* <Typography
            component={Link}
            to='/'
            className={classes.title}
            variant='title'
            color='inherit'
            noWrap
          >
            <img height={30} src={require('../../assets/logo/h.png')} />
          </Typography> */}
          <Typography className={classes.titleLeftBtn} color='inherit' noWrap>
            <Button color='inherit' component={Link} to='/open-collective'>
              Product
            </Button>
            <Button color='inherit'>News</Button>
          </Typography>
          <Typography
            component={Link}
            to='/'
            className={classes.title}
            variant='title'
            color='inherit'
            align='center'
            noWrap
          >
            <img height={60} src={require('../../assets/logo/v.png')} />
          </Typography>
          <Typography className={classes.titleRightBtn} color='inherit' noWrap>
            <Button color='inherit'>VR Exhibition</Button>
            <Button color='inherit'>About</Button>
          </Typography>
        </Toolbar>
      </AppBar>
    )
  }
}

MiniDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired
}

const mapStateToProps = state => state.commonState

const mapDispatchToProps = dispatch => ({
  actions: bindActionCreators(Actions, dispatch)
})

export default connect(mapStateToProps, mapDispatchToProps)(
  withStyles(styles, { withTheme: true })(MiniDrawer)
)
