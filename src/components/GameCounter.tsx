import { Badge } from '@material-ui/core';
import { Games as GamesIcon } from '@material-ui/icons';

export default function GameCounter() {
    // TODO: fetch and display total count of games

    return (
        <Badge badgeContent="?" color="secondary">
            <GamesIcon />
        </Badge>
    );
}
