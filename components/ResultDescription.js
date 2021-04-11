import React from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import NumberFormat from 'react-number-format';
import Link from 'next/link'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'block',
    width: 886,
    minHeight: 886,
    margin: 'auto',
    padding: '20px 50px 20px 0',
    borderBottom: 'thin solid #eee',
    borderRadius: 0
  },
  details: {
    display: 'flex',
  },
  description: {
    display: 'flex',
    flexGrow: '1',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
}));

export default function ResultDescription({ item }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Card className={classes.root}>
      <div className={classes.details}>
        <CardMedia
          className={classes.cover}
          image={item.picture}
          title={item.title}
        />
        <CardContent className={classes.content}>
          <Typography component="h6" variant="h6">
            {item.title}
          </Typography>
          <Typography variant="subtitle1" color="textSecondary">
            <NumberFormat value={item.price.amount} displayType={'text'} thousandSeparator={true} prefix={item.price.currency === 'ARS' ? '$' : 'U$S'} />
          </Typography>
        </CardContent>
      </div>
      <div className={classes.description}>
        <Typography component="p" variant="p">
          {item.description}
        </Typography>
      </div>
    </Card>
  );
}