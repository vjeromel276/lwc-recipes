import { LightningElement } from 'lwc';

export default class ShadowDomQueryChild extends LightningElement {
    handleChangeText() {
        // Within Shadow DOM components, use this.template.querySelector to access elements
        this.template.querySelector('p.shadowDomParagraph').innerText =
            'Text changed by child';
    }
}
