import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function MyTextBox(props) {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate autoComplete="off">
      <TextField 
        id="standard-basic" 
        label={props.label}
        onChange={props.onChange}
        variant={props.variant}
        onKeyDown={(e) => {
          if (e.key === 'Enter' && props.onClickEnter) {
            e.preventDefault();
            props.onClickEnter(e);
          } 
        }}
      />
    </form>
  );
}