import React from 'react';

function SignUpInfo({formData, SetFormData}) {
  return (
    <div className='sign-up-container'>
      <input 
        type="text" 
        placeholder="Email..." 
        value={formData.email} 
        // when there is any change to the form data and u want to keep it as the same as it prevously ultering a single fie that is also an object
        onChange={(event) => 
          SetFormData({...formData, email: event.target.value})}
          />
      <input 
       type="Password" 
       placeholder="Password..."
       value={formData.password} 
        onChange={(event) => 
          SetFormData({...formData, password: event.target.value})}
          />
      <input 
       type="Password" 
       placeholder="Confirm Password"
       value={formData.confirmPassword} 
        onChange={(event) => 
          SetFormData({...formData, confirmPassword: event.target.value})}
          />
      </div>
  );
}

export default SignUpInfo