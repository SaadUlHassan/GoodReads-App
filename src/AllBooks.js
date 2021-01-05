import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import CircularProgress from '@material-ui/core/CircularProgress';
import { useSelector, useDispatch } from 'react-redux'
import { bookSearch, bookFetch, AllBooksFetch } from './redux/actions'
import {setCurrentUser} from './redux/auth/authactions'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { Waypoint } from 'react-waypoint'
import LinearProgress from '@material-ui/core/LinearProgress'
import { Link, Redirect, useHistory } from 'react-router-dom'
import SingleBook from './SingleBook'
import {auth,booksfetch} from './redux/combinereducer'
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid'
const useStyles = makeStyles((theme) => ({
  root: {
    
     
      padding: theme.spacing(2,0,0,0),
      width:'100%'
    
    
  },
 
}));
export default function AllBooks () {
  const classes = useStyles();
  let params = useParams()
  let history = useHistory()
  const dispatch = useDispatch()
  const [page, setPage] = useState(1)
  const user2=useSelector(state=>state.auth.currentUser)
  console.log(user2)
  const AllBooks = useSelector(state => state.booksfetch.allbooks)
  console.log(AllBooks)


  console.log(params)
  const handleEnter = () => {
    console.log('bottom of page')
    setPage(page + 1)
    dispatch(AllBooksFetch(params.query, page))
  }

  useEffect(() => {
    dispatch(AllBooksFetch(params.query, page))
  }, [])
  console.log(page)
if (!user2) return <Redirect to='/Login'/>
  return (
    <div className={classes.root}>
     
      <ol>
        {AllBooks.map(book => (
         
          <Link to={`/SingleBook/${book.id}`}>
              <Grid container spacing={2} justify="center" direction="row" align="center"  >
              <Grid item xs={10}  lg={8}  > 
          <Paper elevation={1} >
            <li>{book.book}</li>
            </Paper>
            </Grid>
            </Grid>
          </Link>
          
        ))}
      </ol>
    
      <Waypoint onEnter={handleEnter}>
      <div >
      <Grid container spacing={1} justify="center" direction="row" align="center"  >
              <Grid item xs={10}  lg={8}  > 
      <CircularProgress />
      <CircularProgress color="secondary" />
      </Grid>
      </Grid>
    </div>
      </Waypoint>
      
    </div>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
