import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { CreateDtoValidator } from "./dtos/create-message.dtos";
import { MessagesService } from "./messages.service";
@Controller("messages")
export class MessagesController {
  constructor(public messageService: MessagesService) {}

  @Get()
  listMessage() {
    return this.messageService.findAll();
  }

  @Post()
  createMessage(@Body() body: CreateDtoValidator) {
    console.log(body);
    return this.messageService.create(body.message);
  }

  @Get("/:id")
  getMessage(@Param("id") id: string) {
    console.log(id, "name");
    return this.messageService.findOne(id);
  }
}
