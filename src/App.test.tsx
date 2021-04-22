import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import fetch from 'node-fetch';
import App from './App';
import { apiTestUrl, createTestApi, runNavigateTo } from './utils/testUtils';

const server = createTestApi();

// test setup
beforeAll(() => {
    // TODO: move to jest `setupFilesAfterEnv` config: https://jestjs.io/docs/configuration#setupfilesafterenv-array
    jest.setTimeout(60_000);
    // mock fetch
    global.fetch = (originalUrl: string, options: any) => {
        let url = originalUrl;
        // in tests, all fetch urls must be absolute
        if (originalUrl.startsWith('/')) {
            url = `${apiTestUrl}${url}`;
        }
        return fetch(url, options);
    };

    // start msw server
    server.listen();
});
afterEach(() => {
    // reset session data and server handlers
    sessionStorage.clear();
    server.resetHandlers();
});
afterAll(() => {
    // stop msw server
    server.close();
});

it('shows dashboard view', async () => {
    render(<App />);

    const dashboardTitle = await screen.findByRole('heading', { name: /dashboard/i });

    expect(dashboardTitle).toBeInTheDocument();
});

it('navigates to some page', async () => {
    render(<App />);

    await runNavigateTo('some page');

    const content = await screen.findByText('(empty)');

    expect(content).toBeInTheDocument();
});
