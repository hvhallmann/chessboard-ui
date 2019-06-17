import React, { Fragment } from 'react';
import { CheckboxField, TextField } from 'tpz-crud';

const TedData = (props) => {
  const { ted } = props.data.settings;

  return (
    <Fragment>

      <TextField
        id='field-ted-endpoint-confirm'
        label='Endpoint de confirmação'
        name='settings.ted.endpointConfirm'
        onChange={props.onChange}
        value={ted.endpointConfirm}
      />

      <TextField
        id='field-ted-security-string'
        label='Header de autenticação'
        name='settings.ted.securityString'
        onChange={props.onChange}
        value={ted.securityString}
      />

      <TextField
        id='field-ted-account'
        label='Contas bancárias (separadas por virgula)'
        name='settings.ted.account'
        onChange={props.onChange}
        value={ted.account}
      />

      <TextField
        id='field-ted-code-identifier'
        label='Código de identificação'
        name='settings.ted.codeIdentifier'
        onChange={props.onChange}
        value={ted.codeIdentifier}
      />

      <CheckboxField
        id='field-ted-allow-transfer-to-different-recipients'
        label='Permite transferências para outros recipientes'
        name='settings.ted.allowTransferToDifferentRecipients'
        onChange={props.onChange}
        value={ted.allowTransferToDifferentRecipients}
      />

    </Fragment>
  );
};

export default TedData;
