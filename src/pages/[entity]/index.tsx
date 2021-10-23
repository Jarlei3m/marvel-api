import { Box, Grid } from '@mui/material';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import { GetStaticPaths, GetStaticProps } from 'next';
import { useRouter } from 'next/router';
import { ParsedUrlQuery } from 'querystring';
import { useCallback, useEffect, useState } from 'react';
import { CategoryCards } from '../../components/CategoryCards';
import { Layout } from '../../components/Layout';
import { api } from '../../services/api';

interface Params extends ParsedUrlQuery {
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
  serverSideCategorys: Array<CategoryProps>;
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
  const [clientSideCategorys, setClientSideCategorys] = useState<
    CategoryProps[]
  >([]);

  const [isPageLoading, setIsPageLoading] = useState(true);
  const [isMoreDataLoading, setIsMoreDataLoading] = useState(false);
  const [error, setError] = useState(false);

  const { asPath } = useRouter();

  // hydration/render process on the client
  useEffect(() => {
    serverSideCategorys && setClientSideCategorys([...serverSideCategorys]);
  }, [serverSideCategorys]);

  useEffect(() => {
    if (serverSideCategorys) {
      setIsPageLoading(false);
    } else {
      setIsPageLoading(true);
    }
  }, [serverSideCategorys]);

  const handleMore = useCallback(async () => {
    setIsMoreDataLoading(true);
    try {
      const offset = clientSideCategorys.length;
      const apiEntity = asPath.replace('/', '');

      const { data }: DataProps = await api.get(apiEntity, {
        params: {
          offset,
        },
      });

      const newCategorysPageData = data.data.results.map((category) => {
        return {
          id: category.id,
          title: category?.title || null,
          name: category?.name || null,
          thumbnail: {
            path: category.thumbnail?.path,
            extension: category.thumbnail?.extension,
          },
          description: category?.description,
        };
      });

      const uniqueValues = [
        ...new Set(clientSideCategorys.map((item) => item.id)),
      ];

      const newCategorysFilteredData = newCategorysPageData.filter((item) => {
        if (uniqueValues.includes(item.id)) {
          return false;
        } else {
          return item;
        }
      });

      setClientSideCategorys([
        ...clientSideCategorys,
        ...newCategorysFilteredData,
      ]);
      setIsMoreDataLoading(false);
    } catch (error) {
      setIsMoreDataLoading(false);
      setError(true);
      console.log(error);
    }
  }, [asPath, clientSideCategorys]);

  return (
    <Layout title={asPath}>
      {isPageLoading ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          ...LOADING
        </Box>
      ) : error ? (
        <Box display="flex" alignItems="center" justifyContent="center">
          Request Failed
        </Box>
      ) : (
        <Box mt="64px">
          {clientSideCategorys.length !== 0 ? (
            <Grid container spacing={4} mt={0} ml={0}>
              {clientSideCategorys?.map((category) => {
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
                    <CategoryCards item={category} />
                  </Grid>
                );
              })}
            </Grid>
          ) : (
            <Grid container spacing={4} mt={0} ml={0}>
              {serverSideCategorys?.map((category) => {
                return (
                  <Grid
                    key={category.id}
                    item
                    xl={3}
                    lg={3}
                    md={4}
                    sm={6}
                    xs={12}
                  >
                    <CategoryCards item={category} />
                  </Grid>
                );
              })}
            </Grid>
          )}

          <Box
            sx={{
              width: '100%',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '32px 0',
            }}
          >
            <Button
              onClick={handleMore}
              sx={{
                width: '256px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              variant="contained"
              disabled={isMoreDataLoading}
            >
              LOAD MORE{' '}
              {isMoreDataLoading && (
                <CircularProgress
                  size={16}
                  sx={{
                    position: 'absolute',
                    right: '64px',
                  }}
                />
              )}
            </Button>
          </Box>
        </Box>
      )}
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
  const { entity } = context.params as Params;

  const { data }: DataProps = await api.get(entity);

  const serverSideCategorys = data.data.results.map((category) => {
    return {
      id: category.id,
      title: category?.title || null,
      name: category?.name || null,
      thumbnail: {
        path: category.thumbnail.path,
        extension: category.thumbnail.extension,
      },
      description: category?.description,
    };
  });

  return {
    props: {
      serverSideCategorys,
    },
    revalidate: 60 * 60, // 1hour
  };
};
