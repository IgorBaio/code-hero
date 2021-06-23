import React, {useState} from 'react'
import {
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Paper,
    withStyles,
    Typography,
    Fade,
} from '@material-ui/core'
import useStyles from './styles';

const StyledTableCell = withStyles(theme => ({
    head: {
        backgroundColor: theme.palette.common.black,
        color: theme.palette.common.white,
    },
    body: {
        fontSize: 14,
        borderBottomWidth:0
    },
}))(TableCell);

const StyledTableRow = withStyles(theme => ({
    root: {
        '&:nth-of-type(even)': {
            backgroundColor: '#e4e4e4',
        },
    },
}))(TableRow);

export default function TablesList(props) {
    const classes = useStyles()
    
    return (
        <TableContainer
            component={Paper}
            elevation={0}
            className={classes.tableContainer}
        >
            <Table style={{borderCollapse: 'inherit'}} className={classes.table}>
                <TableHead className={classes.header} >
                    <TableRow>
                        {props.dataHeader?.map((item, index) => {

                            let style = {
                                paddingTop: 15,
                                paddingBottom:15,
                            };
                            if(item.width){
                                style = {...style, width: item.width};
                            }
                            if(item.highlighted){
                                style = {
                                    ...style,
                                    backgroundColor: 'purple',
                                    color: '#fff',
                                    borderTopLeftRadius: 20,
                                    borderTopRightRadius: 20,
                                    borderBottomWidth: 2.5,
                                    borderBottomStyle: 'solid',
                                    borderBottomColor: 'purple'
                                }
                            }

                            return (
                            <TableCell
                                className={classes.textHeader}
                                align={item.align || 'left'}
                                style={style}
                            >
                                {item.label}
                            </TableCell>)
                        })}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {props.dataRows?.map((row, index) => (
                        <StyledTableRow style={{borderCollapse: 'inherit'}}>
                            <Fade in={true} timeout={2000}>
                                <>
                                {props.dataHeader?.map((column) => {
                                    let style = {
                                        paddingTop: 15,
                                        paddingBottom:15,
                                    };
                                    let styleTypography = {}
                                    if(column.highlighted){
                                        style = {
                                            ...style,
                                            borderLeft: '1px solid',
                                            borderRight: '1px solid',
                                            borderColor: 'purple',
                                        }
                                        if(index === props.dataRows.length-1){
                                            style = {
                                                ...style, 
                                                borderBottomLeftRadius: 20,
                                                borderBottomRightRadius: 20,
                                                borderBottomWidth: 2.5,
                                                borderBottomStyle: 'solid',
                                                borderBottomColor: 'purple',
                                                height:50
                                            }
                                        }
                                    }
                                    if(column.id && column.id === 'doctuzValue' 
                                    && (typeof row[column.id]?.content === 'function' && (!row[column.id]?.content(props.customState)?.props?.value?.includes(">") || !row[column.id]?.content(props.customState)?.props?.children?.includes(">"))
                                        || (typeof row[column.id]?.content !== 'function' && !row[column.id]?.content?.includes(">"))
                                    )
                                    ){
                                        styleTypography= { color: 'purple', fontWeight: 800, alignItems:'center', justifyContent:'center' }  
                                    }

                                    if(column.id && column.id === 'status'){
                                        styleTypography={
                                            color: row.status.content === "Aprovado"
                                              ? 'green'
                                              : row.status.content === "Recusado"
                                              ? 'red'
                                              : 'yellow',
                                              fontWeight:'800'
                                          }
                                    }

                                    return (
                                        <StyledTableCell style={style} align={column.align || 'left'} scope='row'>
                                            <Typography className={classes.contentText} style={styleTypography}>
                                                {typeof row[column.id].content == 'function' ? row[column.id].content(props.customState ? props.customState : null) : row[column.id].content }
                                            </Typography>
                                        </StyledTableCell>)
                                })}
                                </>
                            </Fade>
                        </StyledTableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
}
