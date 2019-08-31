import React, { useState } from 'react';
import _set from 'lodash.set';
import List from '../../components/ListWithoutActions';
import TextField from '../../components/TextField';
import config from './config';

const UserForm = (props) => {
  const [doc, setDoc] = useState(props.doc);
  const [columns] = useState(config.repos);

  const onChange = (name, value) => {
    setDoc({ ..._set(doc, name, value) });
  };

  const onCancel = () => {
    props.onCancel();
    setDoc({});
  };

  return (
    <form>
      <TextField
        id='field-id'
        label='User ID'
        name='id'
        onChange={onChange}
        value={doc.id.toString() || ''}
      />

      <TextField
        id='field-login'
        label='Login'
        name='login'
        onChange={onChange}
        value={doc.login || ''}
      />

      <TextField
        id='field-html-url'
        label='Profile URL'
        name='htmlUrl'
        onChange={onChange}
        value={doc.html_url || ''}
      />

      <TextField
        id='field-date-login'
        label='Date Login Creation'
        name='dateLogin'
        onChange={onChange}
        value={doc.created_at || ''}
      />

      <br />
        <h3>Repos</h3>
        <List
          docs={doc.repos}
          columns={columns}
        />
      <br />
      <button type="button" className="btn btn-link" onClick={onCancel}>Cancel</button>

    </form>
  );
};

export default UserForm;
