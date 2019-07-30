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
  { id: 'AC', label: 'AC' }, { id: 'AL', label: 'AL' }, { id: 'AP', label: 'AP' },
  { id: 'AM', label: 'AM' }, { id: 'BA', label: 'BA' }, { id: 'CE', label: 'CE' },
  { id: 'DF', label: 'DF' }, { id: 'ES', label: 'ES' }, { id: 'GO', label: 'GO' },
  { id: 'MA', label: 'MA' }, { id: 'MT', label: 'MT' }, { id: 'MS', label: 'MS' },
  { id: 'MG', label: 'MG' }, { id: 'PA', label: 'PA' }, { id: 'PB', label: 'PB' },
  { id: 'PR', label: 'PR' }, { id: 'PE', label: 'PE' }, { id: 'PI', label: 'PI' },
  { id: 'RJ', label: 'RJ' }, { id: 'RN', label: 'RN' }, { id: 'RS', label: 'RS' },
  { id: 'RO', label: 'RO' }, { id: 'RR', label: 'RR' }, { id: 'SC', label: 'SC' },
  { id: 'SP', label: 'SP' }, { id: 'SE', label: 'SE' }, { id: 'TO', label: 'TO' }
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
    <TextField
      id='settings-bankslip-registration-account-number'
      label='Número Conta'
      name='settings.registeredBankslip.accountNumber'
      onChange={props.onChange}
      value={_get(props.data, 'settings.registeredBankslip.accountNumber', '')}
    />
    <NumberField
      id='settings-bankslip-registration-deadline'
      label='Decurso de Prazo'
      name='settings.registeredBankslip.deadline'
      onChange={props.onChange}
      value={Number.parseInt(_get(props.data, 'settings.registeredBankslip.deadline', 0), 10)}
    />
    <NumberField
      id='settings-bankslip-registration-deadlineCashin'
      label='Decurso de Prazo Cash in'
      name='settings.registeredBankslip.deadlineCashin'
      onChange={props.onChange}
      value={Number.parseInt(_get(props.data, 'settings.registeredBankslip.deadlineCashin', 0), 10)}
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
    <SelectField
      id='settings-bankslip-registration-payment-indicator-cashin'
      label='Indicador Pagamento Divergente Cash in'
      name='settings.registeredBankslip.divergentPaymentIndicatorCashin'
      onChange={props.onChange}
      value={String(_get(props.data, 'settings.registeredBankslip.divergentPaymentIndicatorCashin'), '')}
      options={paymentIndicators}
    />
  </Fragment>
);

export default BankslipRegData;
