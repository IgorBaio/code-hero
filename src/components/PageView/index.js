import React from 'react';
import PersonOutlineIcon from '@material-ui/icons/PersonOutline';
import { Link, withRouter } from 'react-router-dom';
// import ROUTES from '../../utils/routes'
import useStyles from './styles';
import { Container, Box, Typography } from '@material-ui/core';
import { style } from '../SubHeader/styles';

import Logo from '../../svg/Logo';

export default withRouter(function PageView(props) {
    const hasHeader = props.hasHeader || true;

    const styles = useStyles();

    const goHome = () => {
        props.history.push('/');
    };

    return (
        <Box id="wrapper" className={styles.container}>
            {hasHeader && (
                <>
                    <Box className={styles.bgHeader}></Box>
                    <Box className={styles.header}>
                        <Container maxWidth="lg">
                            <Box className={styles.headerTop}>
                                <Link onClick={goHome} className={styles.logo}>
                                    {' '}
                                    <Logo  className={styles.logoContent}/>
                                </Link>
                                <Box className={styles.infoUser}>
                                    <Typography component="span" className={styles.candidato}>
                                        <Typography component="strong">Igor Baio </Typography>Teste de Front-end
                                    </Typography>
                                    <Box className={styles.boxCb}>
                                    <Typography component="span" className={styles.userLabel}>
                                        <Typography component="strong">CB </Typography>
                                    </Typography>
                                    </Box>
                                </Box>
                            </Box>

                            <Box className={styles.subHeader}>
                                <Box>{props.subHeader || null}</Box>
                            </Box>
                        </Container>
                    </Box>
                </>
            )}
            <Box className={[styles.page, props.stylePage]}>
                <Container maxWidth="lg">
                    <Box>{props.pageContent || null}</Box>
                </Container>
            </Box>
        </Box>
    );
});
