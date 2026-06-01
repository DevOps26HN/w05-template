// src/hooks.server.ts
import { env } from '$env/dynamic/private';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    const cookieName = 'X-Student-Group';

    // If not already set, decide program by TUMID and set it
    if (!event.cookies.get(cookieName)) {
        const tumid = env.TUMID?.toUpperCase() ?? '';
        // adjust this rule to whatever prefix or pattern you need
        const program = tumid.endsWith('abc') ? 'mgmt_tech' : 'informatik';

        event.cookies.set(cookieName, program, {
            path: '/',
            httpOnly: false,  // must be visible to nginx-ingress
            sameSite: 'lax',
            secure: true,     // set false for local HTTP dev
            maxAge: 60 * 60 * 24
        });
    }

    return await resolve(event);
};