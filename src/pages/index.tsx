import { Box, Grid } from '@mui/material';
import { CategoryCard } from '../components/HomeCards';
import { Layout } from '../components/Layout';

const categories = [
  {
    id: 1,
    title: 'Comics',
    entity: 'comics',
    thumbnail:
      'https://1.bp.blogspot.com/-8Bo8lSl1zuE/Xr2V9xmrT5I/AAAAAAABNIc/szvrK7leniA3SF1nIjs-Lc_GR3zudUpsQCK4BGAsYHg/w640-h640/2020-04-05-panini-comics-brasil-marvel-comics-blog-leitora-viciada-checklist.jpg',
  },
  {
    id: 2,
    title: 'Characters',
    entity: 'characters',
    thumbnail:
      'https://i.pinimg.com/originals/38/5b/b2/385bb26fbba75fc2c87760006b289cb4.jpg',
  },
  {
    id: 3,
    title: 'Series',
    entity: 'series',
    thumbnail:
      'https://i.pinimg.com/originals/67/71/1f/67711f74d01670bbefd8a28bd0036f7a.jpg',
  },
  {
    id: 4,
    title: 'Events',
    entity: 'events',
    thumbnail:
      'https://1.bp.blogspot.com/-8Bo8lSl1zuE/Xr2V9xmrT5I/AAAAAAABNIc/szvrK7leniA3SF1nIjs-Lc_GR3zudUpsQCK4BGAsYHg/w640-h640/2020-04-05-panini-comics-brasil-marvel-comics-blog-leitora-viciada-checklist.jpg',
  },
];

export default function Home(): JSX.Element {
  return (
    <Layout title="Home">
      <Box>
        <Grid container spacing={6} mt={24} ml={0}>
          {categories.map((category) => {
            return (
              <Grid
                sx={{
                  paddingLeft: '0px !Important',
                }}
                key={category.id}
                item
                xl={3}
                lg={3}
                md={4}
                sm={6}
                xs={12}
              >
                <CategoryCard card={category} />
              </Grid>
            );
          })}
        </Grid>
      </Box>
    </Layout>
  );
}
