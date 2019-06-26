import React, { useState } from 'react';
import { TextField } from 'tpz-crud';
import _set from 'lodash.set';

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
        value={doc.clientId}
      />

      <br />
      <button type="button" className="btn btn-primary" onClick={onSave}>Salvar</button>&nbsp;
      <button type="button" className="btn btn-link" onClick={onCancel}>Cancelar</button>

    </form>
  );
};

export default PartnerForm;
