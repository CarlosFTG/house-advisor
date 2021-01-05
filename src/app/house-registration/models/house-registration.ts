import { CoordinatesModel } from 'src/app/models/coordinates';

export class HouseRegistration {
    id: number;
    userId: number;
    title: string;
    appreciation : boolean;
    description: string;
    typology: string;
    address: string
    coords:CoordinatesModel
}
