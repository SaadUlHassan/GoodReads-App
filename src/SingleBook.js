import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles'
import Container from '@material-ui/core/Container'
import Link from '@material-ui/core/Link'
import {  Redirect } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { bookSearch, bookFetch } from './redux/actions'
import {currentUser} from './redux/auth/authactions'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react'
import CardContent from '@material-ui/core/CardContent';
import Card from '@material-ui/core/Card';
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box';
import Rating from '@material-ui/lab/Rating';
import CircularProgress from '@material-ui/core/CircularProgress';

function Copyright () {
  return (
    <Typography variant='body2' color='textSecondary'>
      {'Copyright © '}
      <Link color='inherit' href='https://material-ui.com/'>
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  )
}

const useStyles = makeStyles(theme => ({
  loader: {
    
     
    padding: theme.spacing(1,0,0,200),
    width: theme.spacing(120),
  
  
},

  root: {
    display: 'flex',
    flexDirection: 'column',
    minHeight: '100vh'
  },
  main: {
    marginTop: theme.spacing(8),
    marginBottom: theme.spacing(2)
  },
  footer: {
    padding: theme.spacing(3, 2),
    marginTop: 'auto',
    backgroundColor:
      theme.palette.type === 'light'
        ? theme.palette.grey[200]
        : theme.palette.grey[800]
  },
  card: {
    minWidth: 310,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
  text: {
    width: '100%',
    maxWidth: 500,
  },
}))

export default function SingleBook () {
  const [value, setValue] = React.useState(2);
  const theme = {
    spacing: value => value ** 2,
  }
  let params = useParams()
  const dispatch = useDispatch()
  const SingleBook = useSelector(state => state.booksfetch.book)
 
 
  const user1 = useSelector(state => state.auth.currentUser)
  console.log(user1)
  const classes = useStyles()

  console.log(SingleBook)
  console.log(params)

  useEffect(() => {
    console.log(params.id)
    dispatch(bookFetch(params.id))
  }, [params.id])
if(!user1)return <Redirect to ='/Login'/>
  return (
    <div>
      {SingleBook ? (
        <List
          component='nav'
          className={classes.root}
          aria-label='mailbox folders'
        >
 <Grid container spacing={1} justify="center" align="center" direction ="row">   
 <Grid item xs={8} sm={4} lg={3} xl={1}>
          <Card className={classes.card} >
      <CardContent >
          <ListItem button>
          <div className={classes.text}>
      <Typography variant="h6" component="h3" >
      <Box ml={6}>
            {SingleBook.book.value.replace(/[<>]/g,"")} 
            </Box>
            </Typography>
  
            </div>
          </ListItem>
          <Divider />
          <ListItem button divider  >
          <Box ml={8}>
            <img src={SingleBook.image.value} ></img>
            </Box>
          </ListItem>
          <ListItem button>
          <Box ml={11}>
          <Typography variant="h4" component="h1" />Avg rating
          <Box ml={-5}>
          <Rating name="read-only" value={value}  />  </Box>
            <ListItemText primary={SingleBook.avg_rating.value.replace(/[<>]/g,"")} />
            </Box>
          </ListItem>
          <ListItem button>
          <Box ml={10}>
          <Typography variant="h4" component="h1" />Rate it
          <Box ml={-4}>
          <Rating
          name="simple-controlled"
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />
        </Box>
            <ListItemText primary={SingleBook.ratings_count.value.replace(/[<>]/g,"")} />
            </Box>
          </ListItem>
          </CardContent>
      </Card>
      </Grid>
      </Grid>
        </List>
        
     
      ) : (
        <div>
            <Grid container spacing={1} justify="center" direction="row" align="center"  >
              <Grid item xs={10}  lg={8}  > 
        <CircularProgress />
        <CircularProgress color="secondary" />
        </Grid>
        </Grid>
      </div>
      )}
    </div>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
