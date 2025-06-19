function Register() {
  return (
    <div>
      <main className="main-container">
        <section className="login">
          <div className="login-container">
            <h1>Register</h1>

            <form action="#" method="PUT">

                <div className="form-group">
                <label htmlFor="firstname">First Name:  </label>
                <input 
                type="text" 
                id="firstname" 
                name="firstname" 
                required />
              </div>

               <div className="form-group">
                <label htmlFor="lastname">Last Name: </label>
                <input type="text" 
                id="lastname" 
                name="lastname" 
                required />
              </div>

              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input 
                type="text" 
                id="username" 
                name="username" 
                required />
              </div>

              <div className="form-group">
                <label htmlFor="password">Password: </label>
                <input 
                type="password" 
                id="password" 
                name="password" 
                required />
              </div>

              <div className="form-group">
                <button type="submit">Register</button>
              </div>

            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Register;