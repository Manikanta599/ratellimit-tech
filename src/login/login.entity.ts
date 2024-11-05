import { Column, PrimaryGeneratedColumn } from "typeorm";

export class LoginEntity
{
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    username:string;

    @Column({unique:true})
    email:string;

    @Column()
    password:string
}