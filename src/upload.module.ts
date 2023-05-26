import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UploadController } from './upload.controller';
import { Config, ConfigSchema } from './upload.schema';
import { UploadService } from './upload.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Config.name, schema: ConfigSchema }]),
  ],
  controllers: [UploadController],
  providers: [UploadService],
})
export class UploadModule {}
