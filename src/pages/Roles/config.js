const services = [
  { id: '0001', label: 'GET /partner', group: 'neide-api' },
  { id: '0002', label: 'POST /partner', group: 'neide-api' },
  { id: '0003', label: 'PATCH /partner', group: 'neide-api' },
  { id: '0004', label: 'DELETE /partner', group: 'neide-api' },
  { id: '0005', label: 'GET /role', group: 'neide-api' },
  { id: '0006', label: 'POST /role', group: 'neide-api' },
  { id: '0007', label: 'PATCH /role', group: 'neide-api' },
  { id: '0008', label: 'DELETE /role', group: 'neide-api' },
  { id: '0009', label: 'GET /ted', group: 'ted-api' },
  { id: '0010', label: 'POST /ted', group: 'ted-api' },
];

const listColumns = [
  {
    id: 'name',
    label: 'Papel',
    main: true,
    name: 'name'
  },
  {
    id: 'network-group',
    label: 'Grupo de rede',
    name: 'networkGroup'
  }
];

const formFields = [
  {
    component: 'TextField',
    id: 'name',
    label: 'Nome',
    name: 'name'
  },
  {
    component: 'TextField',
    id: 'network-group',
    label: 'Grupo de rede',
    name: 'networkGroup'
  },
  {
    component: 'MultiSelectField',
    id: 'services',
    label: 'Serviços',
    name: 'services',
    options: services
  }
];

export { listColumns, formFields };
