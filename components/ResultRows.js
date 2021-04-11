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
    display: 'flex',
    width: 886,
    minHeight: 150,
    margin: 'auto',
    padding: '20px 50px 20px 0',
    borderBottom: 'thin solid #eee',
    borderRadius: 0
  },
  details: {
    display: 'flex',
    flexDirection: 'column',
  },
  content: {
    flex: '1 0 auto',
  },
  cover: {
    width: 200,
  },
}));

export default function ResultRows({ item }) {
  const classes = useStyles();
  const theme = useTheme();

  return (
    <Link href={`/items/${item.id}`}>
      <Card className={classes.root}>
        <CardMedia
          className={classes.cover}
          image={item.picture}
          title={item.title}
        />
        <div className={classes.details}>
          <CardContent className={classes.content}>
            <Typography component="h6" variant="h6">
              {item.title}
            </Typography>
            <Typography variant="subtitle1" color="textSecondary">
              <NumberFormat value={item.price.amount} displayType={'text'} thousandSeparator={true} prefix={item.price.currency === 'ARS' ? '$' : 'U$S'} />
            </Typography>
          </CardContent>
        </div>
      </Card>
    </Link>
  );
}