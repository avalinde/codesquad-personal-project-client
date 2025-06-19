function Login() {
  return (
    <div>
      <main className="main-container">
        <section className="login">
          <div className="login-container">
            <h1>Login</h1>

            <form action="#" method="POST">
              <div className="form-group">
                <label htmlFor="username">Username: </label>
                <input type="text" 
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
                <button type="submit">Login</button>
              </div>

            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Login;
