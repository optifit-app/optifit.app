export const isProd = import.meta.env.VITE_IS_PRODUCTION === 'true';
export const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
export const postHogKey = import.meta.env.VITE_POSTHOG_KEY;
export const postHogHost = import.meta.env.VITE_POSTHOG_HOST;
