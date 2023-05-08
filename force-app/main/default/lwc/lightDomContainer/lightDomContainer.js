import { LightningElement } from 'lwc';

export default class LightDomContainer extends LightningElement {
    static renderMode = 'light';
    currentTarget;
    target;
    handleButtonClick(event) {
        this.currentTarget = event.currentTarget.tagName;
        this.target = event.target.tagName;
    }
}
