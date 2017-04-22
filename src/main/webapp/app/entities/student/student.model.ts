import { Company } from '../company';
import { Title } from '../title';
export class Student {
    constructor(
        public id?: number,
        public nume?: string,
        public prenume?: string,
        public email?: string,
        public company?: Company,
        public title?: Title,
    ) {
    }
}
