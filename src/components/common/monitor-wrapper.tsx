import { type FC, type ReactNode, useEffect } from 'react';
import { isProd, postHogHost, postHogKey, sentryDsn } from '@/optifit.ts';
import { PostHogProvider } from 'posthog-js/react';
import * as Sentry from '@sentry/react';

interface PostHogWrapperProps {
  children: ReactNode;
}

const MonitorWrapper: FC<PostHogWrapperProps> = ({ children }) => {
  useEffect(() => {
    if (isProd) {
      Sentry.init({
        dsn: sentryDsn,
        sendDefaultPii: true,
      });
    }
  }, [isProd]);

  if (!isProd) {
    return <>{children}</>;
  }

  return (
    <PostHogProvider
      apiKey={postHogKey}
      options={{
        api_host: postHogHost,
      }}
    >
      {children}
    </PostHogProvider>
  );
};

export default MonitorWrapper;
