import { rest } from 'msw';
import { Game } from '../types/api';

if (sessionStorage.getItem('count') == null) {
    sessionStorage.setItem('count', JSON.stringify(0));
}

let gameCount = 1;

export const handlers = (apiBaseUrl = '') => [
    // example api
    rest.get(`${apiBaseUrl}/greeting`, (req, res, ctx) => {
        return res(
            ctx.json({
                message: 'Hello, World!',
            })
        );
    }),
    rest.get(`${apiBaseUrl}/count`, (req, res, ctx) => {
        // count every request in session storage
        let count = JSON.parse(sessionStorage.getItem('count'));
        count += 1;
        sessionStorage.setItem('count', JSON.stringify(count));

        return res(ctx.json(count));
    }),

    // game api
    rest.post<Game>(`${apiBaseUrl}/games`, (req, res, ctx) => {
        const newId = gameCount;
        const game: Game = {
            id: newId,
            ...req.body,
        };
        sessionStorage.setItem('games/' + newId, JSON.stringify(game));
        gameCount += 1;

        return res(ctx.json(game));
    }),
];
