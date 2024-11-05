import { Injectable } from "@nestjs/common";
import { LoginEntity } from "./login.entity";
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserModel } from "./reg.model";
import { RegResponseModel } from "./reg.response";
import * as bcrypt from 'bcrypt';
import { LoginUserModel } from "./login.model";
import { LoginResponseModel } from "./login.response";


export class UserService{
    constructor(
        @InjectRepository(LoginEntity) 
        private userRepo:Repository<LoginEntity>
    )
    {} 

    async register(userDetails:CreateUserModel):Promise<RegResponseModel>
    {
        const{username,email,password}=userDetails;

        //check if user already present

        const existing=await this.userRepo.findOne({where:[{email}]}); 
        
        if(existing)
        {
            const obj=new RegResponseModel(false,1,"User Already Exists",[userDetails])
            return obj;
        }
        //hash the password
        const hashed=await bcrypt.hash(password,10);

        const user=this.userRepo.create({username,email,password});

        const saved= this.userRepo.save(user);

        if(saved)
        {
            return new RegResponseModel(true,0,"User Created Sucessfull",[userDetails]);
        }
    } 

    async login(loginModel:LoginUserModel):Promise<LoginResponseModel>
    {
        const {email,password}=loginModel;
        
        const user=await this.userRepo.findOne({where:{email}});
        if(!user|| !(await bcrypt.compare(password,user.password)))
        {
            return new LoginResponseModel(false,1,"Invalid Creentials",[loginModel]);
        }
        return new LoginResponseModel(true,0,"Valid Credintials",[loginModel])
    }
}


