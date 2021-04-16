import { rest } from 'msw';

if (sessionStorage.getItem('count') == null) {
    sessionStorage.setItem('count', JSON.stringify(0));
}

export const handlers = (apiBaseUrl = '') => [
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
];
