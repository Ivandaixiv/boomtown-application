const styles = theme => ({
  root: {
    flexGrow: 1,
    height: '100%',
    background: theme.palette.primary.main,
    padding: theme.spacing(5),
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(20)
    }
  },
  headline: {
    fontWeight: 500,
    color: theme.palette.text.primary,
    fontSize: theme.typography.h3.fontSize,
    [theme.breakpoints.up('md')]: {
      fontSize: theme.typography.h1.fontSize
    }
  },
  subheading: {
    fontWeight: 400,
    color: 'white'
  }
});

export default styles;
