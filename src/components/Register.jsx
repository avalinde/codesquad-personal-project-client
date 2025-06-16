function Register() {
  return (
    <div>
      <main>
        <section className="login">
          <div className="login-container">
            <h1>Register</h1>

            <form action="#" method="PUT">

                <div className="form-group">
                <label for="firstname">First Name:  </label>
                <input 
                type="text" 
                id="firstname" 
                name="firstname" 
                required />
              </div>

               <div className="form-group">
                <label for="lastname">Last Name: </label>
                <input type="text" 
                id="lastname" 
                name="lastname" 
                required />
              </div>

              <div className="form-group">
                <label for="username">Username: </label>
                <input 
                type="text" 
                id="username" 
                name="username" 
                required />
              </div>

              <div className="form-group">
                <label for="password">Password: </label>
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