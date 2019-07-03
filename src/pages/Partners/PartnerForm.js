import React, { useState } from 'react';
import { Card, TextField } from 'tpz-crud';
import _set from 'lodash.set';

import TedFieldset from './TedFieldset';
import BankslipFieldset from './BankslipFieldset';
import BankstatementFieldset from './BankstatementFieldset';
import BankslipRegistrationFieldset from './BankslipRegistrationFieldset';

const PartnerForm = (props) => {
  const [doc, setDoc] = useState(props.doc);

  const onChange = (name, value) => {
    setDoc({ ..._set(doc, name, value) });
  };

  const onSave = () => {
    props.onSave(doc);
    setDoc({});
  };

  const onCancel = () => {
    props.onCancel();
    setDoc({});
  };

  return (
    <form>
      <TextField
        id='field-client-id'
        label='Client ID'
        name='clientId'
        onChange={onChange}
        value={doc.clientId || ''}
      />

      <TextField
        id='field-document'
        label='Documento'
        name='document'
        onChange={onChange}
        value={doc.document || ''}
      />

      <TextField
        id='field-document-type'
        label='Tipo Documento'
        name='documentType'
        onChange={onChange}
        value={doc.documentType || ''}
      />

      <TextField
        id='field-social-name'
        label='Nome Social'
        name='socialName'
        onChange={onChange}
        value={doc.socialName || ''}
      />

      <TextField
        id='field-code-client'
        label='Código de cliente'
        name='codeClient'
        onChange={onChange}
        value={doc.codeClient || ''}
      />

      <div className='accordion'>
        <Card title='TED'>
          <TedFieldset data={doc} onChange={onChange} />
        </Card>

        <Card title='Bankslip'>
          <BankslipFieldset data={doc} onChange={onChange} />
        </Card>

        <Card title='Bankstatement'>
          <BankstatementFieldset data={doc} onChange={onChange} />
        </Card>

        <Card title='Bankslip Registration'>
          <BankslipRegistrationFieldset data={doc} onChange={onChange} />
        </Card>
      </div>
      <br />
      <button type="button" className="btn btn-primary" onClick={onSave}>Salvar</button>&nbsp;
      <button type="button" className="btn btn-link" onClick={onCancel}>Cancelar</button>

    </form>
  );
};

export default PartnerForm;
