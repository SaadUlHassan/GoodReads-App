import DemoContent from '@fuse/core/DemoContent'
import FusePageSimple from '@fuse/core/FusePageSimple'
import { makeStyles } from '@material-ui/core/styles'
import AddUserHeader from './AddUserHeader'
import AddUserTool from './AddUserTool.js'
import AddUserContent from './AddUserContent'

const useStyles = makeStyles({
  layoutRoot: {}
})

function AddUser () {
  const classes = useStyles()

  return (
    <FusePageSimple
      classes={{
        root: classes.layoutRoot
      }}
      header={AddUserHeader}
      contentToolbar={AddUserTool}
      content={AddUserContent}
    />
  )
}

export default AddUser
