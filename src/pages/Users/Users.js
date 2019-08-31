/* eslint-disable no-underscore-dangle */
import React, { useState, useEffect } from 'react';
import classname from 'classname';

import List from '../../components/List';
import neideApi from '../../neideApi';
import UserForm from './UserForm';
import config from './config';
import Menu from '../../components/Menu';

const Users = () => {
  const [docs, setDocs] = useState(undefined);
  const [doc, setDoc] = useState(undefined);
  const [columns, setColumns] = useState(config.columns);
  const [nextIndex, setNextIndex] = useState(0);

  useEffect(() => {
    neideApi.get('/users')
      .then((docx) => {
        setDocs(docx.data);
        setNextIndex(docx.links.nextIndex);
      });
  }, []);

  const onCancel = () => {
    setDoc(undefined);
    setColumns(config.columns);
  };

  const onNext = async () => {
    const docx = await neideApi.get(`/users?since=${nextIndex}`);
    setDocs(docx.data);
    setNextIndex(docx.links.index);
  };

  const onEdit = async (id) => {
    const docToEdit = docs.find(d => d.id === id);
    const currentDoc = await neideApi.get(`/users/${docToEdit.login}/details`);
    currentDoc.repos = await neideApi.get(`/users/${docToEdit.login}/repos`);

    setDoc(currentDoc);
    setColumns(columns.filter(c => c.main));
  };

  return (

    <div className='container-fluid'>
      <div className='row'>
        <nav className='col-md-2' style={{ backgroundColor: '#f8f9fa' }}>
          <Menu />
        </nav>

        <div className={classname({ 'col-md-3': !!doc, 'col-md-10': !doc })}>
          <h2>Users</h2>

          <List
            docs={docs}
            columns={columns}
            onEdit={onEdit}
            doc={doc}
          />
          <br />
          <button type="button" className="btn btn-link" onClick={onNext}>Next</button>
        </div>

        {doc && (
          <div className='col-md-7'>
            <br />
            <UserForm
              doc={doc}
              onCancel={onCancel}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default Users;
