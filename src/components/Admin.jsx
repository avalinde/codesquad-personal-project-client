import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Admin() {
  const URL = "https://ic-directory-server.onrender.com/";

  const endpoint = "api/clinics/";

  const [clinics, setClinics] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

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

  const handleDeleteClinic = (clinicId) => {
    const confirm = window.confirm("Delete item?");
    if (!confirm) {
      return;
    }
    fetch(`${URL}${endpoint}delete/${clinicId}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((result) => {
        console.log("result :>> ", result);
        window.location.reload();
      })
      .catch((error) => console.log("error :>> ", error));
  };

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
            <h1>Directory Admin Controller</h1>

            <h2>Welcome Eve!</h2>
            <br/>
            <button className="cyan" onClick={()=> navigate("../create")}>+ Create New Clinic</button>
            <br />
          </div>
        }
        <div>
          <table>
            <thead>
              <tr>
                <th>Clinic Name</th>
                <th colSpan="2">Actions</th>
              </tr>
            </thead>
            <tbody className="login">
              {clinics.map((clinic) => (
                <tr key={clinic._id}>
                  <td>
                    <Link to={`../clinic/${clinic._id}`}>{clinic.clinicName}</Link>
                  </td>
                  <td>
                    <button className="white" onClick={() => navigate(`/update/${clinic._id}`)}>
                      UPDATE
                    </button>
                  </td>
                  <td>
                    <button  onClick={() => handleDeleteClinic(clinic._id)}>
                      DELETE
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>
    </div>
  );
}

export default Admin;
