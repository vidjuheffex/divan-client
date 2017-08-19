import React from 'react';
import {StyleSheet, css} from 'aphrodite';
import {Link} from 'react-router-dom';

const styles = StyleSheet.create({
  flexRow: {
    display: 'flex'
  },
  rowHeaders: {
    fontWeight: 'bold'
  },
  flexCol: {
    flexGrow: "1"
  }
});

const AdminProjectList = props => {
  return (
    <div>

      <div className={css(styles.flexRow, styles.rowHeaders)}>
        <div className={css(styles.flexCol)}>Project Name</div>
        <div>Archive</div>
      </div>
    </div>
  );
};

export default AdminProjectList;
