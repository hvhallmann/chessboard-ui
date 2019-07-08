import React from 'react';
import { shallow } from 'enzyme';

import BankslipRegistrationFieldset from './BankslipRegistrationFieldset';

describe('pages/partners/BankslipRegistrationFieldset', () => {
  test('should match snapshot', () => {
    const doc = {};
    const wrapper = shallow(
        <BankslipRegistrationFieldset
            data={doc}
            onChange={jest.fn()}
        />
    );
    expect(wrapper).toMatchInlineSnapshot(`
    <Fragment>
      <NumberField
        id="settings-bankslip-registration-partner-id"
        label="ID Parceiro"
        name="settings.registeredBankslip.partnerId"
        onChange={[MockFunction]}
        value={0}
      />
      <NumberField
        id="settings-bankslip-registration-wallet-id"
        label="ID Carteira"
        name="settings.registeredBankslip.walletId"
        onChange={[MockFunction]}
        value={0}
      />
      <NumberField
        id="settings-bankslip-registration-deadline"
        label="Decurso de Prazo"
        name="settings.registeredBankslip.deadline"
        onChange={[MockFunction]}
        value={0}
      />
      <TextField
        id="settings-ted-endpoint-address"
        label="Endereço"
        name="settings.registeredBankslip.address.main"
        onChange={[MockFunction]}
        value=""
      />
      <TextField
        id="settings-ted-endpoint-city"
        label="Cidade"
        name="settings.registeredBankslip.address.city"
        onChange={[MockFunction]}
        value=""
      />
      <SelectField
        id="settings-bankslip-registration-address-state"
        label="Estado"
        name="settings.registeredBankslip.address.state"
        onChange={[MockFunction]}
        options={
          Array [
            Object {
              "id": 1,
              "label": "AC",
            },
            Object {
              "id": 2,
              "label": "AL",
            },
            Object {
              "id": 3,
              "label": "AP",
            },
            Object {
              "id": 4,
              "label": "AM",
            },
            Object {
              "id": 5,
              "label": "BA",
            },
            Object {
              "id": 6,
              "label": "CE",
            },
            Object {
              "id": 7,
              "label": "DF",
            },
            Object {
              "id": 8,
              "label": "ES",
            },
            Object {
              "id": 9,
              "label": "GO",
            },
            Object {
              "id": 11,
              "label": "MA",
            },
            Object {
              "id": 12,
              "label": "MT",
            },
            Object {
              "id": 13,
              "label": "MS",
            },
            Object {
              "id": 14,
              "label": "MG",
            },
            Object {
              "id": 15,
              "label": "PA",
            },
            Object {
              "id": 16,
              "label": "PB",
            },
            Object {
              "id": 17,
              "label": "PR",
            },
            Object {
              "id": 18,
              "label": "PE",
            },
            Object {
              "id": 19,
              "label": "PI",
            },
            Object {
              "id": 20,
              "label": "RJ",
            },
            Object {
              "id": 21,
              "label": "RN",
            },
            Object {
              "id": 22,
              "label": "RS",
            },
            Object {
              "id": 23,
              "label": "RO",
            },
            Object {
              "id": 24,
              "label": "RR",
            },
            Object {
              "id": 25,
              "label": "SC",
            },
            Object {
              "id": 26,
              "label": "SP",
            },
            Object {
              "id": 27,
              "label": "SE",
            },
            Object {
              "id": 27,
              "label": "TO",
            },
          ]
        }
        value=""
      />
      <TextField
        id="settings-ted-endpoint-zipcode"
        label="CEP"
        name="settings.registeredBankslip.address.zipCode"
        onChange={[MockFunction]}
        value=""
      />
      <SelectField
        id="settings-bankslip-registration-payment-indicator"
        label="Indicador Pagamento Divergente"
        name="settings.registeredBankslip.divergentPaymentIndicator"
        onChange={[MockFunction]}
        options={
          Array [
            Object {
              "id": "1",
              "label": "Qualquer Valor",
            },
            Object {
              "id": "2",
              "label": "Entre o valor mínimo e máximo",
            },
            Object {
              "id": "3",
              "label": "Não aceitar pagamento com valor divergente",
            },
            Object {
              "id": "4",
              "label": "Somente valor mínimo",
            },
          ]
        }
        value="undefined"
      />
    </Fragment>
`);
  });
});
