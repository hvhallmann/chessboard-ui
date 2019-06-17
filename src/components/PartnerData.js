import React, { Fragment } from 'react';
import { TextField } from 'tpz-crud';

const PartnerData = (props) => {
  const { data, onChange } = props;

  return (
    <Fragment>

      <TextField
        id='field-client-id'
        label='Client ID'
        name='clientId'
        onChange={onChange}
        value={data.clientId}
      />

      <TextField
        id='field-document'
        label='Documento'
        name='document'
        onChange={onChange}
        value={data.document}
      />

      <TextField
        id='field-social-name'
        label='Nome Social'
        name='socialName'
        onChange={onChange}
        value={data.socialName}
      />

      <TextField
        id='field-code-client'
        label='Código de cliente'
        name='codeClient'
        onChange={onChange}
        value={data.codeClient}
      />

    </Fragment>
  );
};

export default PartnerData;
