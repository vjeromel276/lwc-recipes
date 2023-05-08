import { LightningElement, wire } from 'lwc';
import { getSObjectValue, refreshApex } from '@salesforce/apex';
import getLatestContact from '@salesforce/apex/ContactController.getLatestContact';
import {
    registerRefreshHandler,
    unregisterRefreshHandler
} from 'lightning/refresh';

import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PICTURE_FIELD from '@salesforce/schema/Contact.Picture__c';

export default class ContactRefreshView extends LightningElement {
    @wire(getLatestContact) contact;
    refreshHandlerID;

    connectedCallback() {
        this.refreshHandlerID = registerRefreshHandler(
            this,
            this.refreshHandler
        );
    }
    disconnectedCallback() {
        unregisterRefreshHandler(this.refreshHandlerID);
    }

    refreshHandler() {
        return new Promise((resolve) => {
            refreshApex(this.contact);
            resolve(true);
        });
    }

    get name() {
        return this.contact.data
            ? getSObjectValue(this.contact.data, NAME_FIELD)
            : '';
    }
    get title() {
        return this.contact.data
            ? getSObjectValue(this.contact.data, TITLE_FIELD)
            : '';
    }
    get picture() {
        return this.contact.data
            ? getSObjectValue(this.contact.data, PICTURE_FIELD)
            : '';
    }
}
