import { document, console } from 'global';
import { storiesOf } from '@storybook/html';

import { forModule } from "storybook-addon-angularjs";

storiesOf('Demo', module)
  .add('heading', () => `<div>
    <h1>test</h1>
  </div>`);

storiesOf('Demo', module)
  .add('button', () => {
    const button = document.createElement('button');
    button.type = 'button';
    button.innerText = 'Hello Button';
    button.addEventListener('click', e => console.log(e));
    return button;
  });

storiesOf("Demo", module)
  .add(
    "sample angular component",
    forModule("app").createElement(compile => {
      return compile`<sample-component></sample-component>`;
    })
  );