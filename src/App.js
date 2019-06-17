import React, { useState } from 'react';
import set from 'lodash.set';
import { Card } from 'tpz-crud';
import PartnerData from './components/PartnerData';
import TedData from './components/TedData';
import BankslipData from './components/BankslipData';
import BankstatementData from './components/BankstatementData';
import partner from './fixture';

function App() {
  const [state, setState] = useState({ partner });

  const onChange = (name, value) => {
    // eslint-disable-next-line no-shadow
    const { partner } = state;
    set(partner, name, value);
    setState({ partner });
    console.log(JSON.stringify(state, null, 2));
  };

  return (
    <div className='App container'>
      <form>

        <PartnerData data={state.partner} onChange={onChange} />

        <div className='accordion'>
          <Card title='TED'>
            <TedData data={state.partner} onChange={onChange} />
          </Card>

          <Card title='Bankslip'>
            <BankslipData data={state.partner} onChange={onChange} />
          </Card>

          <Card title='Bankstatement'>
            <BankstatementData data={state.partner} onChange={onChange} />
          </Card>
        </div>
      </form>
    </div>
  );
}

export default App;
