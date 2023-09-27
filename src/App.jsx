
import './App.css'

function App() {
  const handleSubmit=e=>{
    e.preventDefault();
    const form=e.target;
    const name=form.name.value;
    const email=form.email.value;
    const pass=form.password.value;
    const user={name,email,pass};
    console.log(user);

    fetch('http://localhost:5000/users',{
      method:'POST',
      headers:{
        'content-type': "application/json"
      },
      body: JSON.stringify(user)
    })
    .then(res=>res.json())
    .then(data=>{
      console.log(data);
    })
  }

  return (
    <>
      
      <h1>Simple CRUD</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" name='name' placeholder='username' />
        <br />
        <input type="email" name='email' placeholder='email' />
        <br />
        <input type="password" name='password' placeholder='password' />
        <br />
        <input type="submit" value="Add User" />
      </form>
      
    </>
  )
}

export default App