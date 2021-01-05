import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import { NavLink, Switch, Route, Redirect ,Link} from 'react-router-dom'
import React from 'react'
import UseAutocomplete from './home'
import SingleBook from './SingleBook'
import AllBooks from './AllBooks'
import Login from './Login'
import { useDispatch, useSelector } from 'react-redux'
import { clearCurrentUser} from './redux/auth/authactions'
const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  margin: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}))

export default function ButtonAppBar () {
  const classes = useStyles()
  const dispatch = useDispatch()
  const handleClick=e=>{
   localStorage.clear();
dispatch(clearCurrentUser())
  }
  const user3 = useSelector(state => state.auth.currentUser)
  console.log(user3)
  const user4 = useSelector(state => state.auth.currentUser)
  console.log(user4)
  return (
    <div className={classes.root}>
      <AppBar position='static'>
        <Toolbar>
          <IconButton
            edge='start'
            className={classes.menuButton}
            color='inherit'
            aria-label='menu'
          >
            <MenuIcon />
          </IconButton>
          <Typography variant='h6' className={classes.title}>
            Jazaa Book Search
          </Typography>
          <nav>
            <ul>
              <li>
                <NavLink to='/'>
                <Button variant="contained" size="small" color="primary" className={classes.margin} >
               
               Home
             </Button>
                </NavLink>
              </li>
              { !user3 ? (
              <li>
                <NavLink to='/Login'>
                <Button variant="contained" size="small" color="primary" className={classes.margin} >
               
               Login
             </Button>
                  </NavLink>
              </li>
              ) : (
              <li>
                <NavLink to='/Login'>
               
                <Button variant="contained" size="small" color="primary" className={classes.margin} onClick={handleClick}>
               
          Logout
        </Button>
        
                </NavLink>
              </li>
              )}
            </ul>
          </nav>
        </Toolbar>
      </AppBar>
      <Switch>
 
        <Route
          exact
          activeClassName
          current
          path='/'
          component={UseAutocomplete}
        ></Route>
    
        <Route
          exact
          activeClassName
          current
          path='/SingleBook/:id'
          component={SingleBook}
        ></Route>
            
              <Route
          exact
          activeClassName
          current
          path='/'
          component={UseAutocomplete}
        ></Route>
            
        <Route
          exact
          activeClassName
          current
          path='/AllBooks/:query'
          component={AllBooks}
        ></Route>
        <Route
          exact
          activeClassName
          current
          path='/Login'
          component={Login}
        ></Route>
        <Redirect from='/login' to='/' />
      </Switch>
    </div>
  )
}
