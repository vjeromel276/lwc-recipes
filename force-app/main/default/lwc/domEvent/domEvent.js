import { LightningElement } from 'lwc';

export default class DomEvent extends LightningElement {
    currentTarget;
    target;

    handleButtonClick(event) {
        this.currentTarget = event.currentTarget.tagName;
        this.target = event.target.tagName;
    }
}
