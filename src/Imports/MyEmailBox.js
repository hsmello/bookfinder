import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '80ch',
      [theme.breakpoints.down('md')]: {
        width: '60ch',
      },
      [theme.breakpoints.down('sm')]: {
        width: '40ch',
      },
    },
  },
}));

export default function MyEmailBox() {
  const classes = useStyles();


  return (
    <form className={classes.root} noValidate autoComplete="off">
      <div>
        <TextField
          id="outlined-multiline-static"
          label="Write here"
          multiline
          rows={10}
          variant="outlined"
        />
      </div>
    </form>
  );
}
