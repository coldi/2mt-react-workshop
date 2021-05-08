import {
    Box,
    Button,
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React, { useState } from 'react';
import { useQuery } from 'react-query';
import PageFrame from '../components/PageFrame';
import { Game } from '../types/api';

function useQueryWithParams(initialParams: Record<string, any>) {
    const [params, setParams] = useState(initialParams);
    const response = useQuery<Game[]>(['games', params], () => {
        const queryString = Object.entries(params)
            .map(([key, value]) => `${key}=${value}`)
            .join('&');

        return fetch('/games?' + queryString).then(res => res.json());
    });

    function refetch(newParams: typeof initialParams) {
        setParams(newParams);
    }

    return { response, refetch };
}

export default function GameList() {
    const { response, refetch } = useQueryWithParams({ foo: 1 });

    return (
        <PageFrame>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow>
                            <TableCell>Name</TableCell>
                            <TableCell>Genre</TableCell>
                            <TableCell>Rating</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {response.data?.map(game => (
                            <TableRow key={game.id}>
                                <TableCell component="th" scope="row">
                                    {game.name}
                                </TableCell>
                                <TableCell>{game.genre}</TableCell>
                                <TableCell>
                                    <Rating value={Number(game.rating)} readOnly />
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableBody>
                </Table>
            </TableContainer>
            <Box>
                <Button onClick={() => refetch({ bar: 25 })}>Refetch</Button>
            </Box>
        </PageFrame>
    );
}
