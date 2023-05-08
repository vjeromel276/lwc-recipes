import { LightningElement } from 'lwc';

export default class LightDomChild extends LightningElement {
    static renderMode = 'light';
    handleClick() {
        this.dispatchEvent(
            new CustomEvent('buttonclick', { bubbles: true, composed: false })
        );
    }
}
