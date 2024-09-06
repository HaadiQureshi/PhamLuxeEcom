import { Design } from '@/interface';
import Grid from '@mui/material/Grid';
import { DesignDisplay } from './DesignDisplay';

interface Props {
  designs?: Design[];
}

export const DesignGrid = ({ designs }: Props) => {
  return (
    <Grid
      container
      spacing={2}
    >
      {designs?.map((design, i) => (
        <Grid
          key={design.id}
          item
          xs={12}
          sm={12}
          md={6}
          lg={4}
          xl={3}
        >
          <DesignDisplay design={design} />
        </Grid>
      ))}
    </Grid>
  );
};
