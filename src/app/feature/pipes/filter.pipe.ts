import { Pipe, PipeTransform } from '@angular/core';
import { Contact } from '../models/contact.model';

@Pipe({ name: 'filterData' })
export class FilterDataPipe implements PipeTransform {
    transform(users: Contact[], searchTerm: string): Contact[] {
        if (!users || !searchTerm) {
            return users;
        } else {
            return users.filter(user => user.name.toLowerCase().indexOf(searchTerm.toLowerCase()) !== -1);
        }
    }
}
