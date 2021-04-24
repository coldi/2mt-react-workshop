import { Badge } from '@material-ui/core';
import { Games as GamesIcon } from '@material-ui/icons';
import { useQuery } from 'react-query';
import { Game } from '../types/api';

export default function GameCounter() {
    const response = useQuery<Game[]>('games', () =>
        fetch('/games').then(res => res.json())
    );

    const count = response.data.length;

    return (
        <Badge badgeContent={count.toString()} color="secondary">
            <GamesIcon />
        </Badge>
    );
}
