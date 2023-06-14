import { IsBoolean, IsNotEmpty, IsNumber } from 'class-validator';

export class UpdateSensorMeasurementsDto {
  @IsNumber()
  humidity?: number;

  @IsNumber()
  temperature?: number;

  @IsNumber()
  waterLevel?: number;
}

export class updateActuatorStateDto {
  @IsBoolean()
  @IsNotEmpty()
  set: boolean;
}
