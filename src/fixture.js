const partner = {
  _id: '5be087f5ad2f646685fbe667',
  clientId: '7939e26e-6dd1-37c3-86a2-14e351e9f332',
  document: '57209709000119',
  socialName: 'TESTE INTERNO BAAS',
  codeClient: '465704',
  products: [
    'TED',
    'TEF',
    'BANKSLIP'
  ],
  settings: {
    ted: {
      account: '1222',
      codeIdentifier: 'EMTEDS',
      endpointConfirm: 'http://supermock.demo.sensedia.com/',
      endPointCashInError: 'http://www.mocky.io/v2/5c4ef5ab3100007800c41f44',
      securityString: 'Basic algumacoisa',
      allowTransferToDifferentRecipients: true,
      businessTime: {
        start: '08:00',
        end: '22:23'
      }
    },
    tef: {
      account: [
        '1222'
      ],
      codeIdentifier: 'EMTEDS',
      endpointConfirm: 'http://www.mocky.io/v2/5c12a1703300001e46999055',
      endPointCashInError: 'http://www.mocky.io/v2/5c4ef5ab3100007800c41f44',
      securityString: 'Basic algumacoisa',
      allowTransferToDifferentRecipients: false,
      businessTime: {
        start: '09:00',
        end: '18:30'
      }
    },
    bankSlip: {
      endpointConfirm: 'http://www.mocky.io/v2/5c12a1703300001e46999055',
      securityString: 'Basic algumacoisa',
      accountNumber: 1222,
      partnerId: 17,
      productType: 140,
      businessTime: {
        start: '08:00',
        end: '20:00'
      }
    }
  }
};


export default partner;
