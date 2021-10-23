import GroupsIcon from '@mui/icons-material/Groups';
import HomeIcon from '@mui/icons-material/Home';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import GroupWorkIcon from '@mui/icons-material/GroupWork';
import LocalMoviesIcon from '@mui/icons-material/LocalMovies';
import LoginIcon from '@mui/icons-material/Login';
import {
  AppBar,
  Box,
  IconButton,
  Link as UILink,
  Toolbar,
  Typography,
} from '@mui/material';
import { useRouter } from 'next/router';
import Link from 'next/link';

export function TopBar(): JSX.Element {
  const { asPath, query } = useRouter();

  return (
    <AppBar color="secondary">
      <Toolbar
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          alignItems: 'center',
          justifyItems: 'center',
        }}
      >
        <Box display="flex" justifySelf="start">
          <Link href="/" passHref>
            <UILink underline="none">
              <IconButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  transition: 'color 0.2s',
                  color: asPath === '/' ? '#fff' : '#ababab',

                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                <HomeIcon />
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  Home
                </Typography>
              </IconButton>
            </UILink>
          </Link>
        </Box>

        <Box
          sx={{
            height: '32px',

            '& img': {
              height: '32px',
            },
          }}
        >
          <img src="/assets/marvel_logo.jpg" alt="logo" />
        </Box>

        <Box display="flex" justifySelf="end">
          <Link href="/comics" passHref>
            <UILink underline="none">
              <IconButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  transition: 'color 0.2s',
                  color: query.entity === 'comics' ? '#fff' : '#ababab',

                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                <LibraryBooksIcon />
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  Comics
                </Typography>
              </IconButton>
            </UILink>
          </Link>
          <Link href="/characters" passHref>
            <UILink underline="none">
              <IconButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  transition: 'color 0.2s',
                  color: query.entity === 'characters' ? '#fff' : '#ababab',

                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                <GroupsIcon />
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  Characters
                </Typography>
              </IconButton>
            </UILink>
          </Link>
          <Link href="/series" passHref>
            <UILink underline="none">
              <IconButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  transition: 'color 0.2s',
                  color: query.entity === 'series' ? '#fff' : '#ababab',

                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                <LocalMoviesIcon />
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  Series
                </Typography>
              </IconButton>
            </UILink>
          </Link>
          <Link href="/events" passHref>
            <UILink underline="none">
              <IconButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  transition: 'color 0.2s',
                  color: query.entity === 'events' ? '#fff' : '#ababab',

                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                <GroupWorkIcon />
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  Events
                </Typography>
              </IconButton>
            </UILink>
          </Link>

          <Link href="/#" passHref>
            <UILink underline="none" ml={4}>
              <IconButton
                sx={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexDirection: 'column',
                  transition: 'color 0.2s',
                  color: asPath === '#' ? '#fff' : '#ababab',

                  '&:hover': {
                    color: '#fff',
                  },
                }}
              >
                <LoginIcon />
                <Typography
                  sx={{
                    fontSize: '12px',
                  }}
                >
                  Login
                </Typography>
              </IconButton>
            </UILink>
          </Link>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
