import React from 'react';

function Otherinfo({formData,SetFormData}) {
  return (
    <div className='other-info-container'>
      <input 
        type="text" 
        placeholder="Nationaity..."
        value={formData.nationality}
        onChange={(event) => 
          SetFormData({...formData, nationality: event.target.value})}
        />
      <input 
        type="text" 
        placeholder="Other..."
        value={formData.other}
        onChange={(event) => 
          SetFormData({...formData, other: event.target.value})}
        />
      </div>
  )
}

export default Otherinfo