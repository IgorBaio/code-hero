import { makeStyles } from '@material-ui/core/styles'


const useStyles = makeStyles(theme => ({
    textInput: {
        marginTop: 10,
        marginBottom: 10,
        width: '100%',
    },
    buttonText: {
        fontFamily: 'PT Sans',
        fontStyle: 'normal',
        fontWeight: 'bold',
        fontSize: 17,
        textAlign: 'center',
        [theme.breakpoints.down('sm')] : {
          fontSize: 14
        },
        [theme.breakpoints.down('xs')] : {
          fontSize: 12,
  
        }
    },
    carouselButtons: {
        backgroundColor: 'transparent',
        borderWidth: 0,
        color: '#c2c2c2',
    },
}))

export default useStyles
