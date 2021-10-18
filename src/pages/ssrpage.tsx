import { Button } from '@mui/material';
import { GetServerSideProps } from 'next';
import StyledButton from '../components/StyledButton';

export default function SSRPage(): JSX.Element {
  return (
    <>
      <Button variant="contained" color="primary">
        test
      </Button>
      <StyledButton />
    </>
  );
}
export const getServerSideProps: GetServerSideProps = async () => {
  return {
    props: {},
  };
};
