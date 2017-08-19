import React from 'react';
import { Field, reduxForm, formValueSelector } from 'redux-form';
import {connect} from 'react-redux';
import {StyleSheet, css} from 'aphrodite';
import pascalCase from 'pascalcase';

import general from '../css/general.js';
import inputs from '../css/inputs.js';

const styles = StyleSheet.create({
  input: {
    "-webkit-appearance":"none",
    padding: '.5rem',
    border: 'none'
  }
});

const ProjectCreatorForm = props => {
  const { change, handleSubmit, pristine, reset, submitting, projectName } = props;


  const handleProjectNameChange = event => {
    return (change("fsName", projectName ? pascalCase(projectName.replace("'", "")) : ""));
  };

  
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Project Name</label>
        <div>
          <Field
            className={css(styles.input)}
            name="name"
            component="input"
            type="text"
            placeholder="Project Name"
            onKeyDown={handleProjectNameChange}
            onKeyUp={handleProjectNameChange}
            onBlur={handleProjectNameChange}
            />
        </div>
      </div>
      <div>
        <label>File System Project Name</label>
        <div>
          <Field
            className={css(styles.input)}
            name="fsName"
            component="input"
            type="text"
            placeholder="ProjectName"
            disabled
            />
        </div>
      </div>
      <div>
        <label>Resolution</label>
        <div>
          <Field
            className={css(styles.input)}
            name="hRez"
            component="input"
            type="number"
            />
          x
          <Field
            className={css(styles.input)}
            name="vRez"
            component="input"
            type="number"
            />
        </div>
      </div>
            <div>
        <label>Framerate</label>
        <div>
          <Field
            className={css(styles.input)}
            name="fps"
            component="input"
            type="number"
            />
        </div>
      </div>
      <div className={css(general.center)}>
        <button className = {css(inputs.button, inputs.confirmButton)} type="submit" disabled={pristine || submitting}>Submit</button>
        <button onClick={props.toggleProjectCreator} className = {css(inputs.button, inputs.cancelButton)} type="button" disabled={submitting}>Cancel</button>
      </div>
    </form>
  );
};



let ProjectCreatorFormRaw = reduxForm({
  form: 'createproject', // a unique identifier for this form
  initialValues: {
    hRez: 1920,
    vRez: 1080,
    fps: 29.97
  }
})(ProjectCreatorForm);

const selector = formValueSelector('createproject'); // <-- same as form name

let mapStateToProps = state => {
  // can select values individually
  const projectName = selector(state, 'name');
  return {
    projectName
  };
};

export default connect(mapStateToProps)(ProjectCreatorFormRaw);
