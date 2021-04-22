import { rest } from 'msw';
import { Game } from '../types/api';

// set default data
if (sessionStorage.getItem('count') == null) {
    sessionStorage.setItem('count', JSON.stringify(0));
}
if (sessionStorage.getItem('games') == null) {
    sessionStorage.setItem('games', JSON.stringify([]));
}

const newId = () => `${Date.now()}-${Math.ceil(Math.random() * 999)}}`;

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
    rest.get<Game>(`${apiBaseUrl}/games`, (req, res, ctx) => {
        const games = JSON.parse(sessionStorage.getItem('games'));
        return res(ctx.json(games));
    }),
    rest.post<Game>(`${apiBaseUrl}/games`, (req, res, ctx) => {
        const game: Game = {
            id: newId(),
            ...req.body,
        };
        const games = JSON.parse(sessionStorage.getItem('games'));
        games.push(game);
        sessionStorage.setItem('games', JSON.stringify(games));

        return res(ctx.json(game));
    }),
];
