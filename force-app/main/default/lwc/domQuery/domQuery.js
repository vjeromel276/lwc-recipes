import { LightningElement } from 'lwc';

export default class DomQuery extends LightningElement {
    handleButtonClick() {
        // Elements that are inside a Light DOM child component are directly accessible by the parent
        this.template.querySelector('#lightDomParagraph').innerText =
            'Text changed by parent using querySelector(Click any button to change this text)';

        // This will not work as the parent can not access the elements inside the shadow DOM
        this.template.querySelector('#shadowDomParagraph').innerText =
            'Text changed by parent using querySelector(Click any button to change this text)';
    }
}
