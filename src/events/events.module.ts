import { Module } from '@nestjs/common';
import { EventsGateway } from './events.gateway';
import { EventsService } from './events.service';
import {
  Actuator,
  ActuatorSchema,
  Sensor,
  SensorSchema,
} from './events.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Sensor.name, schema: SensorSchema }]),
    MongooseModule.forFeature([
      { name: Actuator.name, schema: ActuatorSchema },
    ]),
  ],
  providers: [EventsGateway, EventsService],
})
export class EventsModule {}
