import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import TextField from '@material-ui/core/TextField'
import CameraAltOutlinedIcon from '@material-ui/icons/CameraAltOutlined'
import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import { Icon } from '@material-ui/core'
const Roles = [
  {
    label: 'Rescue operator'
  },
  {
    value: 'Responder'
  }
]
const useStyles = makeStyles(theme => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: 200
    }
  },
  cardWidth: {
    minWidth: 500
  },
  title: {
    fontSize: 14
  }
}))

export default function AddUserContent () {
  const classes = useStyles()
  const [role, setRole] = React.useState('Rescue operator')

  const handleChange = event => {
    setRole(event.target.value)
  }

  return (
    <Card className={classes.card}>
      <CardContent>
        <form className={classes.root} noValidate autoComplete='off'>
          <div>
            <TextField
              label='First name'
              id='outlined-size-small'
              defaultValue='Small'
              variant='outlined'
              size='small'
            />
            <TextField
              label='Last name'
              id='outlined-size-small'
              defaultValue='Small'
              variant='outlined'
              size='small'
            />
          </div>
          <div>
            <TextField
              label='Phone'
              id='outlined-size-small'
              defaultValue='Small'
              variant='outlined'
              size='small'
            />
            <TextField
              label='Email'
              id='outlined-size-small'
              defaultValue='Small'
              variant='outlined'
              size='small'
            />
          </div>
          <div>
            <TextField
              id='standard-select-currency'
              select
              label='Select'
              value={Roles}
              onChange={handleChange}
              helperText='Please select your currency'
            >
              {Roles.map(option => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <CameraAltOutlinedIcon color='disabled' />
            <Typography variant='caption' display='block' gutterBottom>
              upload a Photo
            </Typography>
          </div>
          <div>
            <Button variant='outlined'>Cancel</Button>
            <Button variant='contained'>Save</Button>
          </div>
        </form>
      </CardContent>
    </Card>
  )
}
