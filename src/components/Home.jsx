import { Link } from "react-router-dom";

function Home() {
  return (
    <div>
      
      <main>
        <section className="home">
          <h1>Welcome to the Boston Informed Consent Directory! {'\u26a7'}</h1>
        </section>

        <section className="homeimage">
          <p>
            <img src="./public/images/trans-flag-shutterstock.jpg" alt="" />
          </p>
        </section>

        <section className="home-container">
         <Link to={"/directory"}><h2>View Directory</h2></Link>
            
          
          <p>View the Directory of Informed Consent Clinics</p>
        </section>
      </main>
    </div>
  );
}

export default Home;
