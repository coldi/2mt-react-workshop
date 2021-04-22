import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
} from '@material-ui/core';
import { Rating } from '@material-ui/lab';
import React from 'react';
import { useQuery } from 'react-query';
import PageFrame from '../components/PageFrame';
import { Game } from '../types/api';

export default function GameList() {
    const response = useQuery<Game[]>('games', () =>
        fetch('/games').then(res => res.json())
    );

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
        </PageFrame>
    );
}
