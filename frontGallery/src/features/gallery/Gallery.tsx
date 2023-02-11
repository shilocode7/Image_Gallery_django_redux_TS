import React, { useEffect, useState } from 'react';
import { useAppSelector, useAppDispatch } from '../../app/hooks';
import { getStudentsAsync, selectImages , deltudentsAsync , selectUpd } from './gallerySlice';
import styles from './Gallery.module.css';

export const Gallery = () => {
  const images = useAppSelector(selectImages);
  const dispatch = useAppDispatch();
  // for button to display
  // const getstudents = () => {
  //   dispatch(getStudentsAsync())
  // } // end button to display

  useEffect(() => {
    dispatch(getStudentsAsync());
  }, [selectUpd, images.length ]);

  return (
    <div>
      <h2>Welcome to Students List</h2>
      <br />
      <div className={styles.row}>
        Number of students: {images.length}
        <br />
        {/* <button onClick={() => getstudents()}>Get all Students</button><br /><br></br> */}
        <br />
        {images.map((student, i) => (
          <div key={i}>
            Id: {student.id}&nbsp;
            Name: {student.sName}&nbsp;<br />
            City: {student.city}&nbsp;
            Age: {student.age}&nbsp; <br />
            <img
              src={`http://127.0.0.1:8000/${student.image}`}
              style={{ width: '200px', height: '150px' }}
            />
            <button style={{ backgroundColor: 'red' }} onClick={() => dispatch(deltudentsAsync(student.id))}>DELETE</button>
          </div>
        ))}
      </div>
    </div>
  );
};







