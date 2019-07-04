import * as React from 'react';
import { MainComposeIntelliAgent } from './mainComposeIntelliAgent';

export const SelectProvider = () => {

  const [provider, setProvider] = React.useState(
    'apollo'
  );

  const handleChange = event => setProvider(event.target.value);

  let component;

  if (provider === 'Apollo')
    component = <MainComposeIntelliAgent />
  else
    component = <div>I'm here</div>;

  return (
    <div>
      <button value='Apollo' onClick={handleChange}>Call Apollo</button>
      <button value='Rest' onClick={handleChange}>Call Rest</button>
      <p>Used provider :{provider}</p>
      <section>
        {component}
      </section>
    </div>
  );
};
