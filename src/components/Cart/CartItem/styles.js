import { makeStyles } from '@material-ui/core/styles';

export default makeStyles(() => ({
  media: {
      margin: 30,
    height: 260,
  },
  cardContent: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  cartActions: {
    justifyContent: 'space-between',
  },
  buttons: {
    display: 'flex',
    alignItems: 'center',
  },
}));