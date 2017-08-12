import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  center: {
    textAlign: 'center'
  },
  panel:{
    height: 'auto',
    display: 'inline-block',
    padding: '1rem',
    borderRadius: '1rem',
    boxShadow: '0rem 0rem .4rem 0rem rgba(0,0,0,.25)',
    backgroundColor: 'white'
  },
  activeButton: {
    backgroundColor: 'green',
    marginTop: '.5rem',
    marginBottom: '.5rem',
    marginLeft: 'auto',
    marginRight: 'auto',
    padding: '.5rem',
    color: 'white',
    border: 'none',
    ":disabled":{
      opacity: '.25'
    }
  }
});

