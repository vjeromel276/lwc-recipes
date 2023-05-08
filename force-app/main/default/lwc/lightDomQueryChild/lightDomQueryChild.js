import { LightningElement } from 'lwc';

export default class LightDomQueryChild extends LightningElement {
    static renderMode = 'light';

    handleChangeText() {
        // Within Light DOM components, use this.querySelector instead of this.template.querySelector to access elements
        this.querySelector('#lightDomParagraph').innerText =
            'Text changed by child(Click any button to change this text)';
    }
}
