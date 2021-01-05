import { useState, useEffect } from 'react'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField'
import Autocomplete from '@material-ui/lab/Autocomplete'
import { useDispatch, useSelector } from 'react-redux'
import { bookSearch } from './redux/actions'
import { Link, Redirect, useHistory } from 'react-router-dom'
import Button from '@material-ui/core/Button'
import SingleBook from './SingleBook'
import AllBooks from './AllBooks'
import Login from './Login'
import { createBrowserHistory } from 'history'
import Grid from '@material-ui/core/Grid'
import logo from './cover.jpg'
import Box from '@material-ui/core/Box';

import './App.css'
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  
}));
export default function Home () {
  const theme = {
    spacing: value => value ** 2,
  }
  const classes = useStyles();
  const dispatch = useDispatch()
  const [query, setquery] = useState('')
  const bookData = useSelector(state => state.booksfetch.books)
  console.log(bookData)
  let history = useHistory()
  const handleOptionChange = (e, v) => {
    console.log(v.id)

    if (v.id) {
      history.push(`/SingleBook/${v.id}`)
    }
  }

  const handleChange = e => {
    let input = e.target.value
    setquery(input)
    console.log(input)
    setTimeout(() => {
      console.log('axios request')
    }, 8000)
    dispatch(bookSearch(query))
  }
  const handleClick = () => {
    console.log(query)
    if (query) {
      history.push(`/AllBooks/${query}`)
    }
  }

  useEffect(() => {}, [query])

  return (
    <div className={classes.root} >
      <Grid container spacing={1} justify="center" align="center"  direction="row" >
 
      <Grid item xs={12} >
    
        <img src={logo}/>
    
      </Grid>
    </Grid>
    <Grid container spacing={1} justify="center" align="center"  direction="row" >
 
      <Grid item xs={6} >
      <Autocomplete
        id='combo-box-demo'
        options={bookData}
        
        getOptionLabel={option => option.book}
        onChange={handleOptionChange}
       
        renderInput={params => (
          <TextField
            {...params}
            label='GoodReads Search'
            variant='outlined'
            
            onChange={handleChange}
          />
        )}
      />
      </Grid>
      <Grid item  >
        <Button variant='contained' color='primary' onClick={handleClick}>
          Seacrh
        </Button>
      </Grid>
      </Grid>
    </div>
  )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
