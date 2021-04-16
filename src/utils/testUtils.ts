/* eslint-disable prefer-template */
/* eslint-disable global-require */
/* eslint-disable @typescript-eslint/no-var-requires */
import { fireEvent, screen, within } from '@testing-library/react';
import { setupServer } from 'msw/node';
import { handlers } from '../mocks/api';

export const apiTestUrl = 'http://example.com/api/test';

export function createTestApi() {
    return setupServer(...handlers(apiTestUrl));
}

export async function runNavigateTo(name: string) {
    const matcher = new RegExp(name, 'i');
    const nav = await screen.findByRole('navigation');
    const button = within(nav).getByRole('button', { name: matcher });

    fireEvent.click(button);
}
