import { Body, Controller, Get } from '@nestjs/common';

@Controller('upload')
export class UploadController {
  @Get()
  upload(@Body() data): string {
    return '';
  }
}
