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

export function CategoryCards({ item }: ItemProps): JSX.Element {
  const { query } = useRouter();

  return (
    <Card
      sx={{
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

        <CardContent
          sx={{
            position: 'absolute',
            zIndex: 2,
            top: '14rem',
            width: '100%',
          }}
        >
          <Typography
            gutterBottom
            variant="h5"
            component="div"
            sx={{
              width: '100%',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              cursor: 'default',
            }}
          >
            {item?.name ? item.name : item.title}
          </Typography>

          <Typography
            sx={{
              cursor: 'default',
            }}
            variant="body2"
            color="text.secondary"
          >
            {item?.description?.length > 180
              ? item?.description.slice(0, 180) + '...'
              : item?.description}
          </Typography>
        </CardContent>

        <CardActions
          sx={{
            position: 'absolute',
            zIndex: 2,
            bottom: '1rem',
            padding: '16px',
          }}
        >
          <Button variant="contained" size="small" color="secondary">
            <Link href={`${query.entity}/${item.id}`} passHref>
              <UILink underline="none" color="#fff">
                See more
              </UILink>
            </Link>
          </Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}
