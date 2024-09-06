import { useTheme } from '@mui/material';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { CaseType } from '@/interface';
import Image from 'next/image';
import { isSelected } from '@/utils';

interface Props {
  setType: (type: CaseType) => void;
  type: CaseType;
  types: CaseType[];
}

export const TypeSelection = ({ setType, type, types }: Props) => {
  const theme = useTheme();

  return (
    <Box>
      <Card sx={{ display: 'flex', columnGap: theme.spacing(0.5) }}>
        {types.map((caseType) => (
          <CardContent
            key={caseType.id}
            onClick={() => setType(caseType)}
            sx={{
              display: 'flex',
              flexDirection: 'column',
              textAlign: 'center',
              border: 1,
              borderColor: isSelected(caseType, type)
                ? theme.palette.info.main
                : 'transparent',
            }}
          >
            <Image
              alt="TODO"
              height={220}
              src={caseType.src}
              style={{ objectFit: 'cover' }}
              width={150}
            />
            <Typography fontWeight="bold">{caseType.name}</Typography>
            <Typography>$34.99</Typography>
          </CardContent>
        ))}
      </Card>
    </Box>
  );
};
