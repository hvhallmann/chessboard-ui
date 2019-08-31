import React, { useState } from 'react';
import _set from 'lodash.set';
import Card from '../../components/Card';
import TextField from '../../components/TextField';

import BankslipRegistrationFieldset from './BankslipRegistrationFieldset';


const PartnerForm = (props) => {
  const [doc, setDoc] = useState(props.doc);

  const onChange = (name, value) => {
    setDoc({ ..._set(doc, name, value) });
  };

  const onCancel = () => {
    props.onCancel();
    setDoc({});
  };

  return (
    <form>
      <TextField
        id='field-id'
        label='User ID'
        name='id'
        onChange={onChange}
        value={doc.id || ''}
      />

      <TextField
        id='field-login'
        label='Login'
        name='login'
        onChange={onChange}
        value={doc.login || ''}
      />

      <TextField
        id='field-html-url'
        label='Profile URL'
        name='htmlUrl'
        onChange={onChange}
        value={doc.html_url || ''}
      />

      <TextField
        id='field-date-login'
        label='Date Login Creation'
        name='dateLogin'
        onChange={onChange}
        value={doc.dateLogin || ''}
      />

      <div className='accordion'>
        <Card title='Bankslip Registration'>
          <BankslipRegistrationFieldset data={doc} onChange={onChange} />
        </Card>
      </div>
      <br />
      <button type="button" className="btn btn-link" onClick={onCancel}>Cancel</button>

    </form>
  );
};

export default PartnerForm;
