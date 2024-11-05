import { Body, Controller, Post } from "@nestjs/common";
import { UserService } from "./login.service";
import { CreateUserModel } from "./reg.model";
import { time } from "console";
import { LoginUserModel } from "./login.model";
import { LoginResponseModel } from "./login.response";
import { RegResponseModel } from "./reg.response";



@Controller('auth')
export class LoginController
{
    constructor(private readonly userService:UserService){ }

    @Post('register')
    async register(@Body() createUserModel:CreateUserModel):Promise<RegResponseModel>
    {
        return this.userService.register(createUserModel);
    } 

    @Post('login')
    async login(@Body() loginUserModel:LoginUserModel):Promise<LoginResponseModel>
    {
        return this.userService.login(loginUserModel);
    }
}