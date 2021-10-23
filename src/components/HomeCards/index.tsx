import { CardActionArea, Link as UILink } from '@mui/material';
import Card from '@mui/material/Card';
import CardMedia from '@mui/material/CardMedia';
import Link from 'next/link';

interface CardProps {
  card: {
    id: number;
    title: string;
    entity: string;
    thumbnail: string;
  };
}

export function CategoryCard({ card }: CardProps): JSX.Element {
  return (
    <>
      <Link href={`${card.entity}`} passHref>
        <UILink underline="none">
          <Card
            sx={{
              position: 'relative',
              minWidth: 200,
              maxWidth: 300,
              height: 300,
              backgroundColor: 'transparent',
              transition: 'all .2s',
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
              '&:hover': {
                border: '1px solid green',
              },
            }}
          >
            <CardActionArea
              sx={{
                position: 'absolute',
                height: '100%',
                top: 0,
                bottom: 0,
                right: 0,
                left: 0,
                zIndex: 0,
              }}
            >
              <CardMedia
                component="img"
                image={`${card?.thumbnail}`}
                alt={card.title}
              />
            </CardActionArea>
          </Card>
        </UILink>
      </Link>
      <strong>{card.title}</strong>
    </>
  );
}
