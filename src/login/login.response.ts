import { LoginUserModel } from "./login.model"

export class LoginResponseModel {

    status: boolean;
    errorCode: number;
    internalMessage: string;
    data: LoginUserModel[];

    constructor(status: boolean,
        errorCode: number,
        internalMessage: string,
        data: LoginUserModel[]){ 

            this.status=status;
            this.errorCode=errorCode;
            this.internalMessage=internalMessage;
            this.data=data;
        }
        
}