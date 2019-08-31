import React, { Fragment } from 'react';
import _get from 'lodash.get';
import TextField from '../../components/TextField';

const BankslipRegData = props => (
  <Fragment>
    <TextField
      id='settings-bankslip-registration-account-number'
      label='Número Conta'
      name='settings.registeredBankslip.accountNumber'
      onChange={props.onChange}
      value={_get(props.data, 'settings.registeredBankslip.accountNumber', '')}
    />
    <TextField
      id='settings-ted-endpoint-address'
      label='Endereço'
      name='settings.registeredBankslip.address.main'
      onChange={props.onChange}
      value={_get(props.data, 'settings.registeredBankslip.address.main', '')}
    />
    <TextField
      id='settings-ted-endpoint-city'
      label='Cidade'
      name='settings.registeredBankslip.address.city'
      onChange={props.onChange}
      value={_get(props.data, 'settings.registeredBankslip.address.city', '')}
    />
    <TextField
      id='settings-ted-endpoint-zipcode'
      label='CEP'
      name='settings.registeredBankslip.address.zipCode'
      onChange={props.onChange}
      value={_get(props.data, 'settings.registeredBankslip.address.zipCode', '')}
    />
  </Fragment>
);

export default BankslipRegData;
