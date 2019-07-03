import React, { Fragment } from 'react';
import { TextField, NumberField, SelectField } from 'tpz-crud';
import _get from 'lodash.get';

const paymentIndicators = [
  { id: '1', label: 'Qualquer Valor' },
  { id: '2', label: 'Entre o valor mínimo e máximo' },
  { id: '3', label: 'Não aceitar pagamento com valor divergente' },
  { id: '4', label: 'Somente valor mínimo' }
];

const states = [
  { id: 1, label: 'AC' }, { id: 2, label: 'AL' }, { id: 3, label: 'AP' },
  { id: 4, label: 'AM' }, { id: 5, label: 'BA' }, { id: 6, label: 'CE' },
  { id: 7, label: 'DF' }, { id: 8, label: 'ES' }, { id: 9, label: 'GO' },
  { id: 11, label: 'MA' }, { id: 12, label: 'MT' }, { id: 13, label: 'MS' },
  { id: 14, label: 'MG' }, { id: 15, label: 'PA' }, { id: 16, label: 'PB' },
  { id: 17, label: 'PR' }, { id: 18, label: 'PE' }, { id: 19, label: 'PI' },
  { id: 20, label: 'RJ' }, { id: 21, label: 'RN' }, { id: 22, label: 'RS' },
  { id: 23, label: 'RO' }, { id: 24, label: 'RR' }, { id: 25, label: 'SC' },
  { id: 26, label: 'SP' }, { id: 27, label: 'SE' }, { id: 27, label: 'TO' }
];

const BankslipRegData = props => (
  <Fragment>
    <NumberField
      id='settings-bankslip-registration-partner-id'
      label='ID Parceiro'
      name='settings.registeredBankslip.partnerId'
      onChange={props.onChange}
      value={Number.parseInt(_get(props.data, 'settings.registeredBankslip.partnerId', 0), 10)}
    />
    <NumberField
      id='settings-bankslip-registration-wallet-id'
      label='ID Carteira'
      name='settings.registeredBankslip.walletId'
      onChange={props.onChange}
      value={Number.parseInt(_get(props.data, 'settings.registeredBankslip.walletId', 0), 10)}
    />
    <NumberField
      id='settings-bankslip-registration-deadline'
      label='Decurso de Prazo'
      name='settings.registeredBankslip.deadline'
      onChange={props.onChange}
      value={Number.parseInt(_get(props.data, 'settings.registeredBankslip.deadline', 0), 10)}
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
    <SelectField
      id='settings-bankslip-registration-address-state'
      label='Estado'
      name='settings.registeredBankslip.address.state'
      onChange={props.onChange}
      value={_get(props.data, 'settings.registeredBankslip.address.state', '')}
      options={states}
    />
    <TextField
      id='settings-ted-endpoint-zipcode'
      label='CEP'
      name='settings.registeredBankslip.address.zipCode'
      onChange={props.onChange}
      value={_get(props.data, 'settings.registeredBankslip.address.zipCode', '')}
    />
    <SelectField
      id='settings-bankslip-registration-payment-indicator'
      label='Indicador Pagamento Divergente'
      name='settings.registeredBankslip.divergentPaymentIndicator'
      onChange={props.onChange}
      value={String(_get(props.data, 'settings.registeredBankslip.divergentPaymentIndicator'), '')}
      options={paymentIndicators}
    />
  </Fragment>
);

export default BankslipRegData;
