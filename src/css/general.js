import {StyleSheet} from 'aphrodite';

export default StyleSheet.create({
  panel:{
    height: 'auto',
    display: 'inline-block',
    padding: '1rem',
    borderRadius: '.25rem',
    boxShadow: '0rem 0rem .4rem 0rem rgba(0,0,0,.25)',
    backgroundColor: 'white'
  },
  //Panel overides
  panelTop:{
    borderRadius: '.25rem .25rem 0 0'
  },
  panelCore:{
    borderRadius: '0 0 0 0',
    padding: '1rem',
    backgroundColor: 'white'
  },
  panelBottom:{
    borderRadius: '0 0 .25rem .25rem'
  },

  //NOT AN OVERRIDE
  panelBuffer: {
    backgroundColor: 'white',
    padding: 0,
    margin: 0,
    height: '1rem',
    opacity: '.5',
    borderRadius: '0 0 0 0'
  }
});

