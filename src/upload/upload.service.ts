import { Model } from 'mongoose';
import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Config, ConfigDocument } from './upload.schema';

@Injectable()
export class UploadService {
  constructor(
    @InjectModel(Config.name) private uploadModel: Model<ConfigDocument>,
  ) {}

  async getConfig(key: string) {
    const result = await this.uploadModel.findOne({ key }).lean();
    return result;
  }
}
