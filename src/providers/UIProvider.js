import * as React from 'react'
// import "../common/static/icomoon/style.css";
import {
  MuiThemeProvider,
  createMuiTheme,
  withStyles
} from 'material-ui/styles'
import CssBaseline from 'material-ui/CssBaseline'
import * as colors from 'material-ui/colors'
import { connect } from 'react-redux'
import 'typeface-roboto'
const full_screen = {
  height: '100%',
  width: '100%'
}

const styles = {
  '@global': {
    html: full_screen,
    body: full_screen
  }
}

const opacity = (color, opacity) => {
  color = color.substr(1)

  const re = new RegExp(`.{1,${color.length / 3}}`, 'g')
  let colors = color.match(re)

  if (colors && colors[0].length === 1) {
    colors = colors.map(n => n + n)
  }

  return colors
    ? `rgba(${colors.map(n => parseInt(n, 16)).join(', ')}, ${opacity})`
    : ''
}

const MyUIProvider = props => {
  const { color } = props.primary
  const muiTheme = createMuiTheme({
    palette: {
      background: {
        gradient: `linear-gradient(0deg, ${colors[color][500]} 30%, ${colors[color][700]} 90%)`
      },
      primary: {
        light: colors[color][500],
        main: colors[color][700],
        dark: colors[color][900]
      },
      contrastThreshold: 3,
      tonalOffset: 0.2
    },
    overrides: {
      MuiAppBar: {
        colorPrimary: {
          backgroundColor: opacity(colors[color][500], 0.2)
        }
      },
      MuiListItemIcon: {
        root: {
          color: 'white'
        }
      },
      MuiListItemText: {
        primary: {
          color: 'white'
        }
      },
      MuiListItem: {
        root: {
          height: '48px'
        }
      }
    }
  })
  return (
    <MuiThemeProvider theme={muiTheme}>
      <CssBaseline>
        {props.children}
      </CssBaseline>
    </MuiThemeProvider>
  )
}

const mapStateToProps = state => state.commonState
console.log(withStyles(styles))
export default connect(mapStateToProps)(withStyles(styles)(MyUIProvider))
