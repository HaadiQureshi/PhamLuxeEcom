import { Box, Stack, Typography, useTheme } from '@mui/material';
import Image from 'next/image';
import { useSmallScreen } from 'hooks';
import Link from 'next/link';
import { FOOTER_ITEMS } from '@/constant';

interface MobileFooterProps {}

interface DesktopFooterProps {}

interface FooterProps {}

const MobileFooter = ({}: MobileFooterProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        bottom: 0,
        width: '100vw',
        bgcolor: 'primary.main',
      }}
    >
      <Stack sx={{ alignItems: 'center' }}>
        <Image
          alt="Logo"
          height={100}
          priority
          src="/Full_Logo_White.svg"
          style={{ backgroundColor: 'transparent' }}
          width={156.25}
        />
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            flexWrap: 'wrap',
            gap: theme.spacing(3),
          }}
        >
          {FOOTER_ITEMS.map(({ name, href }, i) => (
            <Link
              key={i}
              href={href}
              style={{
                textDecoration: 'none',
              }}
            >
              <Typography
                sx={{ color: 'secondary.main' }}
                variant="button"
              >
                {name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

const DesktopFooter = ({}: DesktopFooterProps) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'relative',
        bottom: 0,
        width: '100vw',
        bgcolor: 'primary.main',
      }}
    >
      <Stack sx={{ alignItems: 'center' }}>
        <Image
          alt="Logo"
          height={100}
          priority
          src="/Full_Logo_White.svg"
          style={{ backgroundColor: 'transparent' }}
          width={156.25}
        />
        <Box sx={{ display: 'flex', gap: theme.spacing(3) }}>
          {FOOTER_ITEMS.map(({ name, href }, i) => (
            <Link
              key={i}
              href={href}
              style={{
                textDecoration: 'none',
              }}
            >
              <Typography
                sx={{ color: 'secondary.main' }}
                variant="button"
              >
                {name}
              </Typography>
            </Link>
          ))}
        </Box>
      </Stack>
    </Box>
  );
};

export const Footer = ({}: FooterProps) => {
  const smallScreen = useSmallScreen();

  if (smallScreen) return <MobileFooter />;

  return <DesktopFooter />;
};

export default Footer;
