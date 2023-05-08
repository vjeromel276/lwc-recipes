import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import { RefreshEvent } from 'lightning/refresh';

import ACCOUNT_FIELD from '@salesforce/schema/Contact.AccountId';
import NAME_FIELD from '@salesforce/schema/Contact.Name';
import TITLE_FIELD from '@salesforce/schema/Contact.Title';
import PICTURE_FIELD from '@salesforce/schema/Contact.Picture__c';

export default class DispatchContactRefreshEvent extends LightningElement {
    // Exposing fields to make them available in the template
    accountField = ACCOUNT_FIELD;
    nameField = NAME_FIELD;
    titleField = TITLE_FIELD;
    pictureField = PICTURE_FIELD;

    handleSuccess(event) {
        //Show Account Created Successfully message
        const evt = new ShowToastEvent({
            title: 'Contact created',
            message: 'Record ID: ' + event.detail.id,
            variant: 'success'
        });
        this.dispatchEvent(evt);

        //Dispatch the refresh event
        this.dispatchEvent(new RefreshEvent());

        //Reset the fields to create a new record
        const inputFields = this.template.querySelectorAll(
            'lightning-input-field'
        );
        inputFields?.forEach((field) => field.reset());
    }
}
