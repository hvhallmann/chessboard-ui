import React, { useState } from 'react';
import { TextField } from 'tpz-crud';
import _set from 'lodash.set';

import MultiSelectField from '../../components/MultiSelectField';

const routes = [
  { id: '0001', label: 'GET /partner', group: 'neide-api' },
  { id: '0002', label: 'POST /partner', group: 'neide-api' },
  { id: '0003', label: 'PATCH /partner', group: 'neide-api' },
  { id: '0004', label: 'DELETE /partner', group: 'neide-api' },
  { id: '0005', label: 'GET /role', group: 'neide-api' },
  { id: '0006', label: 'POST /role', group: 'neide-api' },
  { id: '0007', label: 'PATCH /role', group: 'neide-api' },
  { id: '0008', label: 'DELETE /role', group: 'neide-api' },
  { id: '0009', label: 'GET /ted', group: 'ted-api' },
  { id: '0010', label: 'POST /ted', group: 'ted-api' },
];
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
        id='field-name'
        label='Papel'
        name='name'
        onChange={onChange}
        value={doc.name || ''}
      />

      <TextField
        id='field-network-group'
        label='Grupo de rede'
        name='networkGroup'
        onChange={onChange}
        value={doc.networkGroup || ''}
      />

      <MultiSelectField
        label='Serviços'
        name='authorization'
        onChange={onChange}
        options={routes}
        value={doc.authorization}
      />

      <br />
      <button type="button" className="btn btn-primary" onClick={onSave}>Salvar</button>&nbsp;
      <button type="button" className="btn btn-link" onClick={onCancel}>Cancelar</button>

    </form>
  );
};

export default PartnerForm;
