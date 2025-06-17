import { useEffect, useState } from "react";

function Clinics() {
  const URL = "https://ic-directory-server.onrender.com/";

  const endpoint = "api/clinics/";

  const [clinics, setClinics] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setErrorMessage("");
    setIsLoading(true);

    fetch(`${URL}${endpoint}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        if (result.error) {
          setErrorMessage(result.error.message);
        }
        setClinics(result.data.clinics);
      })
      .catch((error) => setErrorMessage(error))
      .finally(() => setIsLoading(false));
  }, []);

  if (isLoading) {
    return <p>Loading Clinics...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div>
      <main className="main-container">
        {
          <div>
            <h1>List of Clinics</h1>
          </div>
        }
        <div>
          {clinics.map((clinic) => (
            <p key={clinic._id}>
              {clinic.clinicName}
            </p>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Clinics;
