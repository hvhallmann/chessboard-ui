const services = [
  { id: 'GET /partner',    label: 'GET /partner',     group: 'neide-api' },
  { id: 'POST /partner',   label: 'POST /partner',    group: 'neide-api' },
  { id: 'PATCH /partner',  label: 'PATCH /partner',   group: 'neide-api' },
  { id: 'DELETE /partner', label: 'DELETE /partner',  group: 'neide-api' },
  { id: 'GET /role',       label: 'GET /role',        group: 'neide-api' },
  { id: 'POST /role',      label: 'POST /role',       group: 'neide-api' },
  { id: 'PATCH /role',     label: 'PATCH /role',      group: 'neide-api' },
  { id: 'DELETE /role',    label: 'DELETE /role',     group: 'neide-api' },
  { id: 'GET /ted',        label: 'GET /ted',         group: 'ted-api' },
  { id: 'POST /ted',       label: 'POST /ted',        group: 'ted-api' },
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
