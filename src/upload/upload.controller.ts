import { Body, Controller, Get } from '@nestjs/common';
import { UploadService } from './upload.service';

@Controller('upload')
export class UploadController {
  constructor(private readonly uploadService: UploadService) {}

  @Get()
  async upload(@Body() data): Promise<string> {
    const result = await this.uploadService.getConfig('test');
    return result.value;
  }
}
