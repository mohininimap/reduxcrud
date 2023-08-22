import React from 'react';
import { Formik, Form, Field } from 'formik';

const PostForm = ({ onSubmit }) => (
  <div className="modal fade show" style={{ display: 'block' }}>
    <div className="modal-dialog">
      <div className="modal-content">
        <Formik
          initialValues={{ title: '', body: '' }}
          onSubmit={onSubmit}
        >
          <Form className="modal-body">
            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Title:
              </label>
              <Field type="text" id="title" name="title" className="form-control" />
            </div>
            <div className="mb-3">
              <label htmlFor="body" className="form-label">
                Body:
              </label>
              <Field type="text" id="body" name="body" className="form-control" />
            </div>
            <button type="submit" className="btn btn-success">
              Add Post
            </button>   
          </Form>
        </Formik>
      </div>
    </div>
  </div>
);

export default PostForm;

