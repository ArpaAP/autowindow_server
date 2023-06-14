import { UsePipes, ValidationPipe } from '@nestjs/common';
import {
  MessageBody,
  SubscribeMessage,
  WebSocketGateway,
  WebSocketServer,
} from '@nestjs/websockets';
import { Server } from 'socket.io';
import {
  UpdateSensorMeasurementsDto,
  updateActuatorStateDto,
} from './events.dto';
import { EventsService } from './events.service';

@WebSocketGateway(8080, { transports: ['websocket', 'polling'] })
export class EventsGateway {
  constructor(private readonly eventsService: EventsService) {}

  @WebSocketServer()
  server: Server;

  @SubscribeMessage('message')
  async handleMessage(client, payload) {
    this.server.emit('message', payload);
  }

  @SubscribeMessage('updateSensorMeasurements')
  @UsePipes(new ValidationPipe())
  async handleUpdateSensorMeasurements(
    @MessageBody() data: UpdateSensorMeasurementsDto,
  ) {
    await this.eventsService.updateSensorMeasurements(data);

    this.server.emit('sensorMeasurementsUpdated', data);
    this.server.emit('message', {
      message: 'OK; Sensor measurements successfully updated',
    });
    return { message: 'OK; Sensor measurements successfully updated' };
  }

  @SubscribeMessage('updateActuatorState')
  async handleUpdateActuatorState(@MessageBody() data: updateActuatorStateDto) {
    await this.eventsService.updateActuatorState(data);

    this.server.emit('actuatorStateUpdated', data);
    this.server.emit('message', {
      message: `OK; actuator state successfully updated to ${data.set}`,
    });
    return {
      message: `OK; actuator state successfully updated to ${data.set}`,
    };
  }

  @SubscribeMessage('getActuatorState')
  async handleGetActuatorState() {
    const actuatorState = await this.eventsService.getActuatorState();
    return {
      data: actuatorState,
    };
  }
}
