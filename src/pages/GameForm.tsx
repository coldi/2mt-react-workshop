import { Box, Button, Grid, Paper, TextField, Typography } from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { FormEvent } from 'react';
import { useMutation } from 'react-query';
import PageFrame from '../components/PageFrame';
import { Game } from '../types/api';

export default function GameForm() {
    const mutation = useMutation<Game, Error, FormData>(data =>
        fetch('/games', {
            method: 'POST',
            body: data,
        }).then(res => res.json())
    );

    async function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();
        // TODO: improve form handling with formik?
        const form = event.currentTarget;
        const formData = new FormData(form);
        // send request
        mutation.mutate(formData);

        form.reset();
    }

    return (
        <PageFrame>
            <Paper>
                <Box p={2}>
                    <form noValidate autoComplete="off" onSubmit={handleSubmit}>
                        <Grid container spacing={2}>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="game-name"
                                    label="Name"
                                    name="name"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <TextField
                                    variant="outlined"
                                    required
                                    fullWidth
                                    id="game-genre"
                                    label="Genre"
                                    name="genre"
                                />
                            </Grid>
                            <Grid item xs={12}>
                                <Typography component="legend">Rating</Typography>
                                <Rating name="rating" />
                            </Grid>
                        </Grid>
                        <Box mt={2}>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color="primary"
                            >
                                Create
                            </Button>
                        </Box>
                    </form>
                </Box>
            </Paper>
        </PageFrame>
    );
}
