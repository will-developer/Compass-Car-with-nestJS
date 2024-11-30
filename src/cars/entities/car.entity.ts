import { Car } from '@prisma/client';

export class CarEntity implements Car {
  id: number;
  brand: string;
  model: string;
  plate: string;
  year: number;
  created_at: Date;
}
