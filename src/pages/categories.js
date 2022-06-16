import React from 'react';
import { useDispatch, useSelector } from 'react-redux/es/exports';
import { checkStatus } from '../redux/categories/categories';

const propTypes = {};

const defaultProps = {};

const Categorypage = () => {
  const dispatch = useDispatch();
  const data = useSelector((state) => state);
  const handleCheckStatus = () => {
    dispatch(checkStatus());
  };

  return (
    <div>
      <button onClick={handleCheckStatus} type="button">Check status</button>
      <h1>
        {data.categoryReducer.text}
      </h1>
    </div>
  );
};
Categorypage.propTypes = propTypes;
Categorypage.defaultProps = defaultProps;

export default Categorypage;
