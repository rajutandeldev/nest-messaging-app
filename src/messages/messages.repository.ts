import { Injectable } from "@nestjs/common";
import { readFile, writeFile } from "fs/promises";

@Injectable()
export class MessageRepository {
  async findOne(id: string) {
    const content = await readFile("message.json", "utf-8");
    const message = JSON.parse(content);
    return message[id];
  }

  async findAll() {
    const content = await readFile("message.json", "utf-8");
    const message = JSON.parse(content);
    return message;
  }

  async create(message: string) {
    const content = await readFile("message.json", "utf-8");
    const messages = JSON.parse(content);
    const id = Math.floor(Math.random() * 999);
    messages[id] = { id, content: message };

    await writeFile("message.json", JSON.stringify(messages));
  }
}
