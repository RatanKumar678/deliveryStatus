import { Injectable } from '@angular/core';
import { Contact } from '../models/contact.model';

@Injectable()

export class ContactDetailService {
    /**
     * @var contactDetail
     * Will Hold contact Detail
     */
    private contactDetail: Contact[] = [
        {
            address: 'Palasana,sikar,Rajasthan,332482',
            itemStatus: 2,
            name: 'Test Me',
            noItems: 2,
            phone: 9422655138,
            totalAmount: 200,
        },
        {
            address: 'Bt kawade road,Pune,MH-411003',
            itemStatus: 3,
            name: 'Ratan Kumar',
            noItems: 23,
            phone: 9284319315,
            totalAmount: 1300,
        },
        {
            address: 'Pune,MH-411003',
            itemStatus: 1,
            name: 'karan',
            noItems: 23,
            phone: 9284319315,
            totalAmount: 1300,
        },
        {
            address: 'Bt kawade road,Pune,MH-411003',
            itemStatus: 2,
            name: 'Ratan Kumar',
            noItems: 23,
            phone: 9284319315,
            totalAmount: 1300,
        },
    ];

    public itemStatusArr = [
        { id: 1, name: 'Order Received' },
        { id: 2, name: 'Preparing' },
        { id: 3, name: 'Ready to serve' }
    ]

    constructor() { }

    /**
     * @method getContactList
     * To get Contact List
     */
    getContactList() {
        return this.contactDetail;
    }

    /**
     * @method getContactDetail
     * @param index
     * To get Contact Detail depends on Index
     */
    getContactDetail(index) {
        return this.contactDetail[index];
    }

    /**
     * @method addContact
     * @param data
     * Method to add user Detail to contact Detail list
     */
    addContact(data) {
        this.contactDetail.unshift(data);
    }
    /**
     * @method updateContactList
     * @param index
     * @param data
     * Method to update user Detail to contact Detail list using index and user Data
     */
    updateContactList(index, data) {
        this.contactDetail[index] = data;
    }
    /**
     * @method removeContact
     * @param index
     * Method to remove user Detail from contact Detail list using index
     */
    removeContact(index) {
        this.contactDetail.splice(index, 1);
    }
    /**
     * @method checkEmailAndPassword
     * @param index
     * Method to check Email And Password
     */
    checkEmailAndPassword(email: any, password: any) {
        if (email === 'ratan@test.com' && password === '12345') {
            sessionStorage.setItem('email', email);
            return true;
        } else {
            return false;
        }
    }

    getStatusName(id) {
        // tslint:disable-next-line: curly
        if (id === 'all') return 'All';
        let itemName = '';
        this.itemStatusArr.forEach(element => {
            if (element.id == id) {
                itemName = element.name;
            }
        });
        return itemName;
    }

    getStatusArr() {
        return this.itemStatusArr;
    }
}
