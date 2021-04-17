import { Button, Grid, TextField, Typography } from '@material-ui/core';
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

    function handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);
        mutation.mutate(formData);
    }

    return (
        <PageFrame>
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
                <Button type="submit" fullWidth variant="contained" color="primary">
                    Create
                </Button>
            </form>
        </PageFrame>
    );
}
