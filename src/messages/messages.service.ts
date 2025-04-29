import {
  Injectable,
  NotFoundException,
  RequestTimeoutException,
} from "@nestjs/common";
import { MessageRepository } from "./messages.repository";

@Injectable()
export class MessagesService {
  constructor(public messageRep: MessageRepository) {}

  findAll() {
    return this.messageRep.findAll();
  }
  async findOne(id: string) {
    const message = await this.messageRep.findOne(id);
    console.log(message);
    if (!message) {
      throw new RequestTimeoutException("message not found");
    }

    return message;
  }
  create(message: string) {
    return this.messageRep.create(message);
  }
}
