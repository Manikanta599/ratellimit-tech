import { LoginUserModel } from "./login.model"
import { CreateUserModel } from "./reg.model";

export class RegResponseModel {

    status: boolean;
    errorCode: number;
    internalMessage: string;
    data: CreateUserModel[];

    constructor(status: boolean,
        errorCode: number,
        internalMessage: string,
        data: CreateUserModel[]){ 

            this.status=status;
            this.errorCode=errorCode;
            this.internalMessage=internalMessage;
            this.data=data;
        }
        
}