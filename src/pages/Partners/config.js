/* eslint-disable object-curly-newline */
const columns = [
  { label: 'Nome Social', id: 'social-name', name: 'socialName', main: true },
  { label: 'CNPJ', id: 'document', name: 'document' },
  { label: 'Client ID', id: 'client-id', name: 'clientId' }
  // { label: 'Código de Cliente', id: 'code-client', name: 'codeClient' }
];

const defaultDoc = {
  settings: {}
};

export default { columns, defaultDoc };
