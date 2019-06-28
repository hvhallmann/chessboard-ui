import React, { Fragment } from 'react';
import { CheckboxField, TextField } from 'tpz-crud';
import _get from 'lodash.get';

const TedData = props => (
  <Fragment>

    <TextField
      id='field-ted-endpoint-confirm'
      label='Endpoint de confirmação'
      name='settings.ted.endpointConfirm'
      onChange={props.onChange}
      value={_get(props.data, 'settings.ted.endpointConfirm', '')}
    />

    <TextField
      id='field-ted-security-string'
      label='Header de autenticação'
      name='settings.ted.securityString'
      onChange={props.onChange}
      value={_get(props.data, 'settings.ted.securityString', '')}
    />

    <TextField
      id='field-ted-account'
      label='Contas bancárias (separadas por virgula)'
      name='settings.ted.account'
      onChange={props.onChange}
      value={_get(props.data, 'settings.ted.account', '')}
    />

    <TextField
      id='field-ted-code-identifier'
      label='Código de identificação'
      name='settings.ted.codeIdentifier'
      onChange={props.onChange}
      value={_get(props.data, 'settings.ted.codeIdentifier', '')}
    />

    <CheckboxField
      id='field-ted-allow-transfer-to-different-recipients'
      label='Permite transferências para outros recipientes'
      name='settings.ted.allowTransferToDifferentRecipients'
      onChange={props.onChange}
      value={_get(props.data, 'settings.ted.allowTransferToDifferentRecipients', false)}
    />

  </Fragment>
);

export default TedData;
