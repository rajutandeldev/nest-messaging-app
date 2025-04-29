import { IsString } from "class-validator";

export class CreateDtoValidator {
  @IsString()
  message: string;
}
