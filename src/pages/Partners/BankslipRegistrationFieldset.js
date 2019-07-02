import React, { Fragment } from 'react';
import { TextField, NumberField, SelectField } from 'tpz-crud';
import _get from 'lodash.get';

const authors = [
  { id: '1', description: 'Qualquer Valor' },
  { id: '2', description: 'Entre o valor mínimo e máximo' },
  { id: '3', description: 'Não aceitar pagamento com valor divergente' },
  { id: '4', description: 'Somente valor mínimo' }
];

const BankslipRegData = props => (
  <Fragment>
    <NumberField
      id='field-bankslip-registration-partner-id'
      label='ID Parceiro'
      name='field.bankslip.registration.partnerId'
      onChange={props.onChange}
      value={_get(props.data, 'settings.bankslip.registration.partnerId')}
    />
    <NumberField
      id='field-bankslip-registration-wallet-id'
      label='ID Carteira'
      name='field.bankslip.registration.walletId'
      onChange={props.onChange}
      value={_get(props.data, 'settings.bankslip.registration.walletId')}
    />
    <NumberField
      id='field-bankslip-registration-deadline'
      label='Decurso de Prazo'
      name='field.bankslip.registration.deadline'
      onChange={props.onChange}
      value={_get(props.data, 'settings.bankslip.registration.deadline')}
    />
    <TextField
      id='field-ted-endpoint-address'
      label='Endereço'
      name='field.bankslip.registration.address'
      onChange={props.onChange}
      value={_get(props.data, 'field.bankslip.registration.address')}
    />
    <TextField
      id='field-ted-endpoint-city'
      label='Cidade'
      name='field.bankslip.registration.city'
      onChange={props.onChange}
      value={_get(props.data, 'field.bankslip.registration.city')}
    />
    <TextField
      id='field-ted-endpoint-zipcode'
      label='CEP'
      name='field.bankslip.registration.zipcode'
      onChange={props.onChange}
      value={_get(props.data, 'field.bankslip.registration.zipcode')}
    />
    <SelectField
      id='field-bankslip-registration-payment-indicator'
      label='Indicador Pagamento Divergente'
      name='field.bankslip.registration.paymentIndicator'
      onChange={props.onChange}
      value={_get(props.data, 'field.bankslip.registration.paymentIndicator')}
      options={authors}
    />
  </Fragment>
);

export default BankslipRegData;
