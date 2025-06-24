function About() {
  return (
    <div>
      <main>
        <section className="main-container">
          <h1>About Us/FAQ</h1>
          <div className="ic-about">
            <h2>Who is this Directory For?</h2>
            <p>This directory exists for individuals of all gender identities and expression seeking gender-affirming medical care in the Boston area. Our aim is to provide up-to-date information on the the variety of services offered, insurance information, and locations of clinics to empower individuals when making life-changing healthcare decisions. </p>

            <br />

            <h2>Why the Informed Consent Model of Gender-Affirming Care?</h2>
            <p>
              The informed consent model is beneficial for the transgender
              community because it centers the autonomy and agency of
              transgender individuals in making decisions about their medical
              transition. Instead of requiring lengthy psychological evaluations
              or gatekeeping, this model allows patients to access
              gender-affirming treatments after being fully informed of the
              risks, benefits, and alternatives. This approach reduces barriers,
              respects individuals' knowledge of their own identities, and leads
              to improved mental health outcomes by enabling timely and
              affirming treatment.
            </p>
            
            <br />

            <h3 className="text-center">See also:</h3>
            <p className="text-center">Click{'\u0020'}
              <a href="https://www.ncbi.nlm.nih.gov/books/NBK430827/">
               here  
              </a>
            {'\u0020'}for more information on the informed consent model. 
            </p>

            <p className="text-center"> <a href="https://pubmed.ncbi.nlm.nih.gov/25779756/">Comprehensive transgender healthcare: the gender affirming clinical and public health model of Fenway Health</a></p>

            <p className="text-center"> <a href="https://pubmed.ncbi.nlm.nih.gov/35212746/">Mental Health Outcomes in Transgender and Nonbinary Youths Receiving Gender-Affirming Care </a></p>

            <p className="text-center"><a href="https://www.hrc.org/resources/get-the-facts-on-gender-affirming-care">Human Rights Campaign: Get the Facts on Gender-Affirming Care</a></p>


          </div>
        </section>
      </main>
    </div>
  );
}

export default About;
