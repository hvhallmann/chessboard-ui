/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import classname from 'classname';
import _clone from 'lodash.clonedeep';

import { List } from 'tpz-crud';

import neideApi from '../../neideApi';
import Menu from '../../components/Menu';
import fixture from './fixture';
import RolesForm from './RolesForm';

const initialColumns = [
  {
    label: 'Papel', id: 'name', name: 'name', main: true
  },
  { label: 'Grupo de rede', id: 'network-group', name: 'networkGroup' }
];

const Partners = () => {
  const [docs, setDocs] = useState(fixture);
  const [doc, setDoc] = useState(undefined);
  const [columns, setColumns] = useState(initialColumns);

  useEffect(() => {
    // neideApi.get('/role')
    //   .then(setDocs);
  }, []);

  const onCancel = () => {
    setDoc(undefined);
    setColumns(initialColumns);
  };

  const post = docToPost => neideApi.post('/role', docToPost).then((postedDoc) => {
    setDocs(_clone(docs).push(postedDoc));
    onCancel();
  });

  const patch = (docToPatch, idx) => neideApi.patch('/role', docToPatch).then((patchedDoc) => {
    const newDocs = _clone(docs);
    newDocs[idx] = patchedDoc;
    setDocs(newDocs);
    onCancel();
  });

  const onSave = (docToSave) => {
    const idx = docs.findIndex(item => item._id === docToSave._id);
    return (idx === -1) ? post(docToSave) : patch(docToSave, idx);
  };

  const onEdit = (id) => {
    const docToEdit = docs.find(d => d._id === id);
    setDoc(_clone(docToEdit));
    setColumns(columns.filter(c => c.main));
  };

  const onNew = () => {
    setDoc({});
    setColumns(columns.filter(c => c.main));
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
          <Menu />
        </nav>

        <div className={classname({ 'col-md-3': !!doc, 'col-md-10': !doc })}>
          <h2>Papéis</h2>
          <button
            className='btn btn-link'
            onClick={onNew}
            style={{ padding: 0 }}
            type='button'
          >
            <span className='oi oi-plus' />
          </button>

          <List
            docs={docs}
            columns={columns}
            onEdit={onEdit}
            doc={doc}
          />
        </div>

        {doc && (
          <div className='col-md-7'>
            <br />
            <RolesForm
              doc={doc}
              onSave={onSave}
              onCancel={onCancel}/>
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
