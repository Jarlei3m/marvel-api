import { Box } from '@mui/material';
import { GetStaticPaths, GetStaticProps } from 'next';
import { ParsedUrlQuery } from 'querystring';
import { Layout } from '../../components/Layout';
import { UniquePage } from '../../components/UniquePage';
import { api } from '../../services/api';

interface Params extends ParsedUrlQuery {
  id: string;
  entity: string;
}

interface CategoryProps {
  id: number;
  title: string | null;
  name: string | null;
  thumbnail: {
    path: string;
    extension: string;
  };
  description: string;
}

interface Categorys {
  serverSideCategorys: CategoryProps;
}

interface DataProps {
  data: {
    data: {
      results: Array<CategoryProps>;
    };
  };
}

export default function CategorysPage({
  serverSideCategorys,
}: Categorys): JSX.Element {
  const { title, name } = serverSideCategorys;

  return (
    <Layout title={title || name}>
      <Box mt={12}>
        <UniquePage item={serverSideCategorys} />
      </Box>
    </Layout>
  );
}

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  };
};

export const getStaticProps: GetStaticProps = async (context) => {
  const { entity, id } = context.params as Params;

  const { data }: DataProps = await api.get(`${entity}/${id}`);

  const serverSideCategorys = {
    id: data.data.results[0].id,
    title: data.data.results[0]?.title || null,
    name: data.data.results[0]?.name || null,
    thumbnail: {
      path: data.data.results[0].thumbnail.path,
      extension: data.data.results[0].thumbnail.extension,
    },
    description: data.data.results[0]?.description,
  };

  console.log('data:', serverSideCategorys);

  return {
    props: {
      serverSideCategorys,
    },
    revalidate: 60 * 60, // 1hour
  };
};
