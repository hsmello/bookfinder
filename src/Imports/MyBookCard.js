import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
  },
});

export default function ImgMediaCard(props) {
  const classes = useStyles();

  return (
    <Card className={classes.root}>
      {/* <CardActionArea> */}
        <CardMedia
          component="img"
        //   alt="Contemplative Reptile"
          height="500"
          image={props.image}
        //   title={props.title}
        />
        <CardContent>
          <Typography>
            {props.title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.author}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.published}
          </Typography>
        </CardContent>
      {/* </CardActionArea> */}

    </Card>
  );
}
