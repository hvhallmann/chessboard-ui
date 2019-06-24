import React, { Fragment } from 'react';
import { TextField, ComboBox } from 'tpz-crud';
import _get from 'lodash.get';

const BankslipData = props => (
  <Fragment>
    <NumericField
      id='field-bankslip-registration-partner-id'
      label='ID Parceiro'
      name='field.bankslip.registration.partnerId'
      onChange={props.onChange}
      value={_get(props.data, 'settings.bankslip.registration.partnerId')}
    />
    <NumericField
      id='field-bankslip-registration-wallet-id'
      label='ID Carteira'
      name='field.bankslip.registration.walletId'
      onChange={props.onChange}
      value={_get(props.data, 'settings.bankslip.registration.walletId')}
    />
    <NumericField
      id='field-bankslip-registration-deadline'
      label='Decurso de Prazo'
      name='field.bankslip.registration.deadline'
      onChange={props.onChange}
      value={_get(props.data, 'settings.bankslip.registration.deadline')}
    />
    <ComboBox
      id='field-bankslip-registration-payment-indicator'
      label='Indicador Pagamento Divergente'
      name='field.bankslip.registration.paymentIndicator'
      onChange={props.onChange}
      value={_get(props.data, 'settings.bankslip.registration.paymentIndicator')}
    />
  </Fragment>
);

export default BankslipData;
