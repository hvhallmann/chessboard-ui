import React, { useState } from 'react';
import classname from 'classname';
import _clone from 'lodash.clonedeep';

import PartnerForm from './PartnerForm';
import List from '../../components/List';
import config from './config';
import Menu from '../../components/Menu';
import fixture from '../../fixture';

const Partners = () => {
  const [docs, setDocs] = useState(fixture);
  const [doc, setDoc] = useState(undefined);
  const [columns, setColumns] = useState(config.columns);

  const onCancel = () => {
    setDoc(undefined);
    setColumns(config.columns);
  };

  const onSave = (docToSave) => {
    const idx = docs.findIndex(item => item._id === docToSave._id);
    if (idx === -1) docs.push(docToSave);
    else docs[idx] = docToSave;
    setDocs(docs);
    onCancel();
  };

  const onEdit = (id) => {
    const docToEdit = docs.find(d => d._id === id);
    setDoc(_clone(docToEdit));
    setColumns(columns.filter(c => c.main));
  };

  return (
    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
          <Menu />
        </nav>

        <div className={classname({ 'col-md-3': !!doc, 'col-md-10': !doc })}>
          <h2>Parceiros</h2>
          <List
            docs={docs}
            columns={columns}
            onEdit={onEdit}
            doc={doc}
          />
        </div>

        {doc && (
          <div className='col-md-7'>
            <br/>
            <PartnerForm
              doc={doc}
              onSave={onSave}
              onCancel={onCancel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Partners;
