import { defineMiddleware } from 'astro:middleware';

const realm = 'Play+ preview';

function unauthorized(message = 'Authentication required') {
  return new Response(message, {
    status: 401,
    headers: {
      'Cache-Control': 'no-store',
      'WWW-Authenticate': `Basic realm="${realm}", charset="UTF-8"`,
    },
  });
}

export const onRequest = defineMiddleware(({ request }, next) => {
  const expectedUsername = import.meta.env.AUTH_USERNAME || 'playplus';
  const expectedPassword = import.meta.env.AUTH_PASSWORD;

  // Never accidentally publish the site if deployment configuration is incomplete.
  if (!expectedPassword) {
    return new Response('Site authentication is not configured.', {
      status: 503,
      headers: { 'Cache-Control': 'no-store' },
    });
  }

  const authorization = request.headers.get('authorization');
  if (!authorization?.startsWith('Basic ')) return unauthorized();

  try {
    const credentials = atob(authorization.slice(6));
    const separator = credentials.indexOf(':');
    const username = credentials.slice(0, separator);
    const password = credentials.slice(separator + 1);

    if (
      separator < 0 ||
      username !== expectedUsername ||
      password !== expectedPassword
    ) {
      return unauthorized('Invalid username or password');
    }
  } catch {
    return unauthorized('Invalid authorization header');
  }

  return next();
});
