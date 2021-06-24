import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
    tableContainer: {
        marginBottom: 50,
    },
    table: {
        padding:0,
        margin:0
    },
    textHeader: {
        fontSize: 14,
        color: '#8E8E8E',
        fontWeight: '800',
        fontFamily: 'MontSerrat',
        borderBottomWidth: 2.5,
        borderBottomStyle: 'solid',
        backgroundColor: 'transparent',
        paddingBottom: 15,
    },
    header: {
        backgroundColor: 'transparent',
        borderWidth: 2,
        borderColor: '#000',
        borderBottomWidth: 3,
    },
    contentText: {
        fontWeight: 400,
        color: '#666',
        textTransform: 'none'
    }

});

export default useStyles;