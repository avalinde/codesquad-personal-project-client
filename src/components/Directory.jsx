import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";

function Directory() {
  const URL = "https://ic-directory-server.onrender.com/";

  const endpoint = "api/clinics";

  const bostonCenter = [42.3555, -71.0565];

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

  console.log("clinics :>>", clinics);

  
  

  if (isLoading) {
    return <p>Loading Clinics...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <div>
      <main>
        {
          <div>
            <h1>Clinic Directory</h1>
            {/* {clinics.map((clinic) => (
              <p key={clinic._id}>
                {clinic.clinicName}
               {L.marker([clinic.latitude, clinic.longitude]).addTo(map)}
              </p>
            ))} */}
          </div>
        }
        <div>
          <MapContainer center={bostonCenter} zoom={13} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            <Marker position={bostonCenter}>
              <Popup>
                A pretty CSS3 popup. <br /> Easily customizable.
              </Popup>
            </Marker>

            <Marker position={[42.36321, -71.06879]}>
              <Popup>Mass General Hospital</Popup>
            </Marker>

            {clinics.map((clinic) => (
              <div key={clinic._id}>
              <Marker
                position={[clinic.latitude, clinic.longitude]}
              >
                <Popup>{clinic.clinicName}</Popup>
              </Marker>
              </div>
            ))}
          </MapContainer>
        </div>
      </main>
    </div>
  );
}

export default Directory;
