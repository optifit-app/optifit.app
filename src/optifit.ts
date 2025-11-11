import asf from '@/assets/images/logos/swiss-football.svg';
import acvf from '@/assets/images/logos/acvf.png';
import gdf from '@/assets/images/logos/gdf.png';
import ashb from '@/assets/images/logos/ASHB.png';
import cornhole from '@/assets/images/logos/cornhole.png';
import avenches from '@/assets/images/logos/avenches.png';
import fcjm from '@/assets/images/logos/fcjm.webp';
import fcbussigny from '@/assets/images/logos/fcbussigny.png';
import donneloye from '@/assets/images/logos/donneloye.jpeg';

export const isProd = import.meta.env.VITE_IS_PRODUCTION === 'true';
export const sentryDsn = import.meta.env.VITE_SENTRY_DSN;
export const postHogKey = import.meta.env.VITE_POSTHOG_KEY;
export const postHogHost = import.meta.env.VITE_POSTHOG_HOST;

export const customers = [
  asf,
  acvf,
  gdf,
  ashb,
  cornhole,
  avenches,
  fcjm,
  fcbussigny,
  donneloye,
  'https://www.europlan-online.de/files/1cc883ddb94f0546e9dfca785a327f50.gif',
  'https://static.wixstatic.com/media/bc22f9_66cbfe8842184563b0ceb89b0a861275~mv2.png/v1/fill/w_180,h_230,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/fcp_2006.png',
  'https://boutique.sportmidable.com/fc-romanel/img/romanel-fc-logo-1725891345209.jpg',
  'https://fcstadenyonnais-sa.ch/wp-content/uploads/2025/09/logo-stade-nyonnais-scaled.png',
  'https://tmssl.akamaized.net//images/wappen/big/9127.png?lm=1533919592',
  'https://www.europlan-online.de/files/824e3a9bd645876252cb5d4aeefed5ab.png',
  'https://fc-cheseaux.ch/wp-content/uploads/2024/08/Plan-de-travail-1.png',
  'https://www.fccransmontana.ch/images/logo.png',
  'https://upload.wikimedia.org/wikipedia/fr/thumb/c/cc/Logo_fc_echallens_region_003.png/120px-Logo_fc_echallens_region_003.png',
  'https://fcveveysports.ch/wp-content/uploads/elementor/thumbs/logo_veveyunited-nwawqh6cxvnhbcwesp9jeaj9ri3oc31sxkytvcxqh0.png',
  'https://cdn.durable.co/blocks/3QIM1Knkz9NFdvCeWMOyU0JgKrvUFV69EqHY8PrDftI2fTeuRT2NeKvQvmAbqBSq.png',
];
