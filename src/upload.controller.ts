import { Controller, Get } from '@nestjs/common';

@Controller('upload')
export class UploadController {
  @Get()
  response(): string {
    return 'asdf';
  }
}
