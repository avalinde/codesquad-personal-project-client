function Contact() {
  return (
    <div>
      Contact
      <main>
        <section className="contact">
          <h1>Contact Us</h1>
          <p>
            This is an ongoing project! You can reach out to the admin at{" "}
            <span>bostoninformedconsentdirectory@gmail.com</span>
          </p>

          <div className="form-container">
            <form>
              <div className="form-group">
                <label htmlFor="name">Your Name:</label>
                <input type="text" id="name" name="name" required />
              </div>
              <div className="form-group">
                <label htmlFor="email">Your Email:</label>
                <input type="email" id="email" name="email" required />
              </div>
              <div className="form-group">
                <label htmlFor="message">Your Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="5"
                  required
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
