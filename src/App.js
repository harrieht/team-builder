import React, { useState } from 'react';

import Form from './Components/Form';

function App() {
  const [members, setMembers] = useState([]);
  const [values, setValues] = useState({name: "", email: "", role: ""});
  /**
   * CReate state variables to hold team members
   * and hold form values
   * 
   * Create update and submit functions
   */

 const onSubmit = () => {
  setMembers([values, ...members]);
  setValues({name: "", email: "", role: ""});
}

const onChange = (name, value) => {
  setValues({...values, [name]: value})
}

  return (
    <div className="App">
      <h1>Team Builder App!!</h1>
      <Form
        values={values}
      change={onChange}
      submit={onSubmit}
        />
        {members.map((member, idx) => {
          return (
            <div>
              {member.email}, {member.name}, {member.role}
            </div>
          )
        })}
    </div>
  );
}

export default App;