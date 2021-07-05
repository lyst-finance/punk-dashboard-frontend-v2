import TextField from '@material-ui/core/TextField'
import { makeStyles } from '@material-ui/core/styles'

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '22ch',
      },
    },
  }));

const Input = ({ setPunkID, getValue, }) => {

    const classes = useStyles();

    const handleTextFieldChange = (event) => {
        setPunkID(event.target.value);
    }

    return (
        <form  className={classes.root} noValidate autoComplete="off">
         <TextField onChange={handleTextFieldChange} id="outlined-basic" label="enter punk ID" variant="outlined" />   
        </form>
    )
}

export default Input 