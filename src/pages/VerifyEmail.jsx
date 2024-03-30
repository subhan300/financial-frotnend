import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { emailVerification } from '../redux/features/auth/auth.reducer';
import { useParams } from 'react-router-dom';

const VerifyEmailPage = () => {
  const dispatch = useDispatch();
  const { token } = useParams();
  console.log(token);
  useEffect(() => {
    dispatch(emailVerification(token));
  }, [token]);
  return (
    <div>
      {/* Optionally, you can display a loading spinner or message here */}
      Congraturaltions! Your email has been verified
    </div>
  );
};

export default VerifyEmailPage;
