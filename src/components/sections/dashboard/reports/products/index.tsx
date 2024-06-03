import { fontFamily } from 'theme/typography';
import { Paper } from '@mui/material';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import Product from './Product';
import iPhone from 'assets/images/iPhone.png';
import AWS8 from 'assets/images/AWS8.png';

const productsData = [
  {
    id: 1,
    name: 'iPhone 14 Pro Max',
    imageUrl: iPhone,
    inStock: 524,
    price: '1,099.00',
  },
  {
    id: 2,
    name: 'Apple Watch S8',
    imageUrl: AWS8,
    inStock: 320,
    price: '799.00',
  },
];

const Products = () => {
  return (
    <Stack direction="column" gap={3.75} component={Paper} sx={{ height: 300 }}>
      <Typography
        variant="h6"
        sx={(theme) => ({
          fontWeight: theme.typography.subtitle1.fontWeight,
          fontFamily: fontFamily.workSans,
        })}
      >
        Products
      </Typography>

      <Stack justifyContent="space-between">
        <Typography
          variant="caption"
          sx={(theme) => ({ fontWeight: theme.typography.body1.fontWeight })}
        >
          Products
        </Typography>
        <Typography
          variant="caption"
          sx={(theme) => ({ fontWeight: theme.typography.body1.fontWeight })}
        >
          Price
        </Typography>
      </Stack>

      {productsData.map((item) => {
        return <Product key={item.id} data={item} />;
      })}
    </Stack>
  );
};

export default Products;