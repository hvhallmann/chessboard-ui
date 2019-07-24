import React, { useState } from 'react';
import { Card, TextField, SelectField } from 'tpz-crud';
import { useAlert } from 'react-alert';
import _set from 'lodash.set';

import TedFieldset from './TedFieldset';
import BankslipFieldset from './BankslipFieldset';
import BankstatementFieldset from './BankstatementFieldset';
import BankslipRegistrationFieldset from './BankslipRegistrationFieldset';

const documentOptions = [
  { id: 'CNPJ', label: 'CNPJ' },
  { id: 'CPF', label: 'CPF' }
];


const PartnerForm = (props) => {
  const [doc, setDoc] = useState(props.doc);

  const alert = useAlert();

  const onChange = (name, value) => {
    setDoc({ ..._set(doc, name, value) });
  };

  const onSave = () => {
    props.onSave(doc)
      .then((response) => {
        if (response === 'done') {
          alert.success('Record saved successfully!');
          setDoc({});
        }
      });
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

      <SelectField
        id='field-document-type'
        label='Tipo Documento'
        name='documentType'
        onChange={onChange}
        value={doc.documentType || ''}
        options={documentOptions}
      />

      <TextField
        id='field-social-name'
        label='Nome Social'
        name='socialName'
        onChange={onChange}
        value={doc.socialName || ''}
      />

      <TextField
        id='field-trading-name'
        label='Nome Fantasia'
        name='tradingName'
        onChange={onChange}
        value={doc.tradingName || ''}
      />

      <TextField
        id='field-code-client'
        label='Código cliente Core Banking'
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
