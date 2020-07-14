import { APIGatewayEvent, Context } from 'aws-lambda';

const brandList = [
  {
    id: 1,
    displayName: 'Apple',
    categoryId: 1,
  },
  {
    id: 2,
    displayName: 'Samsung',
    categoryId: 1,
  },
  {
    id: 3,
    displayName: 'Google',
    categoryId: 1,
  },
  {
    id: 4,
    displayName: 'LG',
    categoryId: 1,
  },
  {
    id: 5,
    displayName: 'OnePlus',
    categoryId: 1,
  },
  {
    id: 7,
    displayName: 'Essential',
    categoryId: 1,
  },
];

interface Brand {
  id: number;
  displayName: string;
  categoryId: number;
}

export default async function getDeviceBrands(
  event: APIGatewayEvent
): Promise<Brand[]> {
  return brandList;
}
