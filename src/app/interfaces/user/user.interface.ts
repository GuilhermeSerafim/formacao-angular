import { IAddress } from "./address.interface"
import { IStatus } from "./status.interface"

export interface IUser {
    name: string;
    email: string;
    password: string;
    age: number;
    address: IAddress;
    phone: string;
    isActive: boolean;
    role: string;
    registrationDate: string;
    status: IStatus;
}