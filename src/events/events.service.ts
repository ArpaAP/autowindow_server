import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import {
  Actuator,
  ActuatorDocument,
  Sensor,
  SensorDocument,
} from './events.schema';
import {
  UpdateSensorMeasurementsDto,
  updateActuatorStateDto,
} from './events.dto';

@Injectable()
export class EventsService {
  constructor(
    @InjectModel(Sensor.name) private sensorModel: Model<SensorDocument>,
    @InjectModel(Actuator.name) private actuatorModel: Model<ActuatorDocument>,
  ) {}

  async updateSensorMeasurements(data: UpdateSensorMeasurementsDto) {
    const result = await this.sensorModel
      .findOneAndUpdate({}, data, {
        upsert: true,
      })
      .lean();
    return result;
  }

  async updateActuatorState(data: updateActuatorStateDto) {
    const result = await this.actuatorModel
      .findOneAndUpdate({}, data, {
        upsert: true,
      })
      .lean();
    return result;
  }

  async getActuatorState() {
    const result = await this.actuatorModel.findOne({});
    return result;
  }
}
