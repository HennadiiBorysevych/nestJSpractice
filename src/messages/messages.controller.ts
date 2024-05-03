import { Body, Controller, Get, Param, Post } from '@nestjs/common';
import { CreateMessageDto } from './dtos/create-messsage.dto';

@Controller('messages')
export class MessagesController {
  @Get()
  listMessages() {
    return 'list of messages';
  }

  @Post()
  createMessage(@Body() body: CreateMessageDto) {
    console.log(body);
    return 'new message';
  }

  @Get('/:id')
  getMessage(@Param('id') id: string) {
    console.log(id);
    return 'message';
  }
}
