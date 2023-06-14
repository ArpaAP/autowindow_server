import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';

export type SensorDocument = HydratedDocument<Sensor>;

@Schema()
export class Sensor {
  @Prop()
  humidity: number;

  @Prop()
  temperature: number;

  @Prop()
  waterLevel: number;
}

export const SensorSchema = SchemaFactory.createForClass(Sensor);

export type ActuatorDocument = HydratedDocument<Actuator>;

@Schema()
export class Actuator {
  @Prop()
  state: 'open' | 'closed';
}

export const ActuatorSchema = SchemaFactory.createForClass(Actuator);
