import { Box } from '@mui/material';
import Head from 'next/head';
import { ReactNode } from 'react';
import theme from '../../../styles/theme';
import { TopBar } from '../TopBar';

interface LayoutProps {
  children: ReactNode;
  title: string | null;
}

export function Layout({ children, title }: LayoutProps): JSX.Element {
  return (
    <>
      <Head>
        <title>{title} | Marvel</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <Box
        sx={{
          backgroundColor: theme.palette.background.default,
          display: 'flex',
          overflow: 'hidden',
        }}
      >
        <TopBar />
        <Box
          sx={{
            display: 'flex',
            flex: '1 1 auto',
            overflow: 'hidden',
            paddingTop: 84,
            maxWidth: '1440px',
            margin: '0 auto',
            padding: '0 24px 64px',
          }}
        >
          <Box
            sx={{
              display: 'flex',
              flex: '1 1 auto',
            }}
          >
            <Box
              sx={{
                flex: '1 1 auto',
                height: '100%',
              }}
            >
              {children}
            </Box>
          </Box>
        </Box>
      </Box>
    </>
  );
}
