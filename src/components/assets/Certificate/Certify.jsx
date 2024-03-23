// CertificateVerifier.js

import React, { useState } from 'react';
import axios from 'axios';

const CertificateVerifier = () => {
  const [certificateId, setCertificateId] = useState('');
  const [verificationResult, setVerificationResult] = useState('');

  const handleVerify = async () => {
    try {
      const response = await axios.post('http://localhost:5000/verify', { certificateId });
      setVerificationResult(response.data.message);
    } catch (error) {
      console.error('Error verifying certificate ID:', error);
      setVerificationResult('Failed to verify certificate ID');
    }
  };

  return (
    <div className='certi-css' style={{margin:'3rem',height:'50vh',textAlign:'center'}}>
      <h2>Certificate Verifier</h2>
      <label htmlFor="certificateId">Enter Certificate ID:</label><br />
      <input style={{margin:'1rem'}}
        type="text"
        id="certificateId"
        value={certificateId}
        onChange={(e) => setCertificateId(e.target.value)}
      />
      <br/>
      <button onClick={handleVerify}>Verify</button>
      {verificationResult && <p>{verificationResult}</p>}
    </div>
  );
};

export default CertificateVerifier;
