import {
  Button,
  CardActionArea,
  CardActions,
  Link as UILink,
} from '@mui/material';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Box, Grid } from '@mui/material';

interface ItemProps {
  item: {
    id: number;
    name: string | null;
    title: string | null;
    thumbnail: {
      path: string;
      extension: string;
    };
    description: string;
  };
}

export function UniquePage({ item }: ItemProps): JSX.Element {
  return (
    <Box
      sx={{
        display: 'grid',
        gridTemplateColumns: '1fr 1fr',
        alignItems: 'center',
      }}
    >
      <Card
        sx={{
          justifySelf: 'center',
          position: 'relative',
          minWidth: 200,
          maxWidth: 300,
          '&:after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            width: '100%',
            height: '84%',
            bottom: 0,
            zIndex: 1,
            background: 'linear-gradient(to top, #000, rgba(0,0,0,0))',
          },
        }}
      >
        <CardActionArea
          sx={{
            cursor: 'default',
          }}
        >
          <CardMedia
            component="img"
            image={`${item?.thumbnail?.path}/portrait_uncanny.${item?.thumbnail?.extension}`}
            alt={`${item?.name ? item.name : item.title} photo`}
          />
        </CardActionArea>
      </Card>

      <Box>
        <Box
          sx={{
            display: 'grid',
            gridTemplateColumns: '88px 1fr',
            alignItems: 'baseline',
          }}
        >
          <Typography variant="body1">Title:</Typography>
          <Typography variant="body2" color="text.secondary" ml={2}>
            {item?.name ? item.name : item.title}
          </Typography>
        </Box>

        <Box
          mt={2}
          sx={{
            display: 'grid',
            gridTemplateColumns: '88px 1fr',
            alignItems: 'baseline',
          }}
        >
          <Typography variant="body1">Description:</Typography>
          <Typography variant="body2" color="text.secondary" ml={2}>
            {item?.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
}
