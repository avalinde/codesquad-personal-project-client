import { useState } from "react";

function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    e.stopPropagation();

    fetch("https://formcarry.com/s/_sVOsasKZml", {
      method: "POST",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name, email, message }),
    })
      .then((response) => response.json())
      .then((response) => {
        if (response.code === 200) {
          alert("We received your submission, thank you!");
        } else if (response.code === 422) {
          // Field validation failed
          setError(response.message);
        } else {
          // other error from formcarry
          setError(response.message);
        }
      })
      .catch((error) => {
        // request related error.
        setError(error.message ? error.message : error);
      });
  };

  if (error) {
    console.log(error);
  }

  return (
    <div>
      <main className="main-container">
        <section>
          <h1>Contact Us</h1>
          <p>
            This is an ongoing project! You can reach out to the admin at
            <span>bostoninformedconsentdirectory@gmail.com</span>
          </p>

          <div className="form-container">
            <form onSubmit={(e) => handleSubmit(e)} className="form-f">
              <div className="form-p">
                <label className="form-l" htmlFor="name">
                  Your Name:
                </label>
                <input
                  type="text"
                  className="form-i"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  id="name"
                  placeholder="Your first and last name"
                />
              </div>
              <div className="form-p">
                <label className="form-l" htmlFor="email">
                  Your Email:
                </label>
                <input
                  className="form-i"
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  id="email"
                  placeholder="john@doe.com"
                />
              </div>
              <div className="form-p">
                <label className="form-l" htmlFor="message">
                  Your Message:
                </label>
                <textarea
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  id="message"
                  placeholder="Enter your message..."
                ></textarea>
              </div>
              <div className="form-group">
                <button type="submit">Send Message</button>
              </div>
            </form>
          </div>
        </section>
      </main>
    </div>
  );
}

export default Contact;
