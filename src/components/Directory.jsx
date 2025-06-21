import { useEffect, useState } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import L from "leaflet";
import { Link } from "react-router-dom";



const Directory = () => {
  const URL = "https://ic-directory-server.onrender.com/";

  const endpoint = "api/clinics";

  const bostonCenter = [42.3555, -71.0565];

  const [clinics, setClinics] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  const markerIconUrl = "../node_modules/leaflet/dist/images/marker-icon.png"
  const markerIconRetinaUrl = "../node_modules/leaflet/dist/images/marker-icon-2x.png";
  const markerShadowUrl = "../node_modules/leaflet/dist/images/marker-shadow.png";



    L.Icon.Default.prototype.options.iconUrl = markerIconUrl;
    L.Icon.Default.prototype.options.iconRetinaUrl = markerIconRetinaUrl;
    L.Icon.Default.prototype.options.shadowUrl = markerShadowUrl;
    L.Icon.Default.imagePath = "";


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
      <main className="main-container">
        {
          <div>
            <h1>Clinic Directory</h1>
          </div>
        }
        <div>
          <MapContainer center={bostonCenter} zoom={11} scrollWheelZoom={false}>
            <TileLayer
              attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {clinics.map((clinic) => (
              <div key={clinic._id}>
                <Marker position={[clinic.latitude, clinic.longitude]}>
                  <Popup>
                    <div className="text-center">
                      {/* <Link to={`../clinic/${clinic._id}`}>{clinic.clinicName}</Link> */}
                      {clinic.clinicName}
                    </div>
                  </Popup>
                </Marker>
              </div>
            ))}
          </MapContainer>
        </div>
      </main>
    </div>
  );
};

export default Directory;
