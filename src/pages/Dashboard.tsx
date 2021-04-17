import { css } from '@emotion/react';
import { Box, Container, Grid, Paper, Typography } from '@material-ui/core';
import { useQuery } from 'react-query';

const styles = {
    container: css`
        padding-top: 2rem;
        padding-bottom: 2rem;
    `,
    paper: css`
        display: flex;
        flex-direction: column;
        padding: 1rem;
    `,
    fixedHeight: css`
        height: 15rem;
    `,
};

export default function Dashboard() {
    const count = useQuery<{ message: string }>('count', () =>
        fetch('/count').then(res => res.json())
    );
    const greeting = useQuery<{ message: string }>('greeting', () =>
        fetch('/greeting?count=' + count.data).then(res => res.json())
    );
    return (
        <Container maxWidth="lg" css={styles.container}>
            <Typography component="h2" variant="h3">
                Dashboard
            </Typography>
            <Box mt={2}>
                <Grid container spacing={3}>
                    <Grid item xs={12} md={8} lg={8}>
                        <Paper css={[styles.paper, styles.fixedHeight]}>
                            <Typography>{greeting.data.message}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12} md={4} lg={4}>
                        <Paper css={[styles.paper, styles.fixedHeight]}>
                            <Typography>Counter: {count.data}</Typography>
                        </Paper>
                    </Grid>
                    <Grid item xs={12}>
                        <Paper css={[styles.paper, styles.fixedHeight]}>
                            <Typography>(empty)</Typography>
                        </Paper>
                    </Grid>
                </Grid>
            </Box>
        </Container>
    );
}
