function Home() {
  return (
    <div>
      
      <main>
        <section className="home">
          <h1>Welcome to the Boston Informed Consent Directory! {'\u26a7'}</h1>
        </section>

        <section className="homeimage">
          <p>
            <img src="images/trans-flag-shutterstock.jpg" alt="" />
          </p>
        </section>

        <section className="home-container">
          <a href="#">
            <h2>View Directory</h2>
          </a>
          <p>View the Directory of Informed Consent Clinics</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
