import { CartItem, CaseType, FinishType, ModelType } from '@/interface';
import { CURRENT_FORMATTER } from '@/utils';
import { Box, Typography } from '@mui/material';

interface Props {
  customText?: string;
  finish: FinishType;
  model: ModelType;
  name: string;
  price: number;
  type: CaseType;
}

export const ProductSummary = ({
  customText,
  finish,
  model,
  name,
  price,
  type,
}: Props) => {
  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: 0.001 }}>
      <Typography fontWeight="bold">{name}</Typography>
      <Typography variant="subtitle2">
        <>
          {model.name} | {type.name} | {finish.name}
        </>
      </Typography>
      {customText && (
        <Typography variant="subtitle2">Text: {customText}</Typography>
      )}
      <Typography variant="subtitle2">
        {CURRENT_FORMATTER.format(price)}
      </Typography>
    </Box>
  );
};
