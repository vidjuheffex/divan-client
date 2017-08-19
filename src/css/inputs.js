import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  button: {
    display: 'inline-block',
    marginTop: '.5rem',
    marginBottom: '.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '.5rem',
    border: 'none',
    backgroundColor: 'lightgrey',
    ":disabled":{
      opacity: '.25'
    }
  },
  confirmButton: {
    backgroundColor: 'green',
    color: 'white'
  },
  cancelButton: {
    color: 'white',
    backgroundColor: 'red'
  }
});

