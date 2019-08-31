/* eslint-disable object-curly-newline */
const columns = [
  { label: 'ID', id: 'id', name: 'id', main: true },
  { label: 'Login', id: 'login', name: 'login', main: true },
];

const repos = [
  { label: 'ID', id: 'id', name: 'id', main: true },
  { label: 'Name', id: 'name', name: 'name', main: true },
  { label: 'URL', id: 'html_url', name: 'html_url', main: true },
];

const defaultDoc = {
  settings: {}
};

export default { columns, repos, defaultDoc };
