import { Injectable } from '@nestjs/common';
import { MessagesRepository } from './dtos/messages.repository';
@Injectable()
export class MessagesService {
//   messagesRepo: MessagesRepository;

  constructor(public messagesRepo: MessagesRepository) {
    // Service is creating ita won dependecies
    // DONT DO THIS IN REAL APPSf
    // this.messagesRepo = new MessagesRepository();
    // this.messagesRepo = messagesRepo;
  }

  findOne(id: string) {
    return this.messagesRepo.findOne(id);
  }
  findAll() {
    return this.messagesRepo.findAll();
  }
  create(content: string) {
    return this.messagesRepo.create(content);
  } 
}
