export class User {
    id: number;
    name: string;
    surname: string;
    email: string;
    password: string;
    registrationDate: Date;
    roles:string[]=[];
}
