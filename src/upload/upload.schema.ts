import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { HydratedDocument } from 'mongoose';

export type ConfigDocument = HydratedDocument<Config>;

@Schema()
export class Config {
  @Prop()
  key: string;

  @Prop({ type: mongoose.Schema.Types.Mixed })
  value: any;
}

export const ConfigSchema = SchemaFactory.createForClass(Config);
