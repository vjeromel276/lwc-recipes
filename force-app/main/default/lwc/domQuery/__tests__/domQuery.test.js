import { createElement } from 'lwc';
import DomQuery from 'c/domQuery';

describe('c-dom-query', () => {
    //Enable light DOM as c-light-dom-query-child is built using lightDOM.
    //This is a work around, and it can be removed with the next update of sfdx-lwc-jest.
    // eslint-disable-next-line no-undef
    lwcRuntimeFlags.ENABLE_LIGHT_DOM_COMPONENTS = true;

    afterEach(() => {
        // The jsdom instance is shared across test cases in a single file so reset the DOM
        while (document.body.firstChild) {
            document.body.removeChild(document.body.firstChild);
        }
    });

    it.skip('changes inner text in the c-light-dom-query-child paragraph element', () => {
        const BUTTON_LABEL = 'Change Text on Child';
        const PARAGRAPH_TEXT =
            'Text changed by child(Click any button to change this text)';

        const element = createElement('c-dom-query', {
            is: DomQuery
        });
        document.body.appendChild(element);

        // Query all lightning-button elements and click the lightning-button in the parent
        const lightningButtonEls =
            element.shadowRoot.querySelectorAll('lightning-button');
        lightningButtonEls[0].click();

        //Verify the lightning-button in the parent is clicked
        expect(lightningButtonEls[0].label).toBe(BUTTON_LABEL);

        //Verify light DOM child paragraph text is changed
        const pEl = element.shadowRoot.querySelector('#lightDomParagraph');
        expect(pEl.innerText).toBe(PARAGRAPH_TEXT);
    });

    it.skip('is accessible', async () => {
        const element = createElement('c-dom-query', {
            is: DomQuery
        });

        document.body.appendChild(element);

        //Verify component is accessible
        await expect(element).toBeAccessible();
    });
});
