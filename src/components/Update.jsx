import { useEffect, useState } from "react";
import { useNavigate, Link, useParams } from "react-router-dom";

function Update() {
  const URL = "https://ic-directory-server.onrender.com/";
  const endpoint = "api/clinics/";
  //let clinicID = "684776f904ed535ac7ca6c12";
  const { clinicID } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    clinicName: "",
    street: "",
    phone: "",
    website_url: "",
    latitude: 0,
    longitude: 0,
    primaryCare: false,
    behavioralHealth: false,
    surgicalTeam: false,
    aetna: false,
    blueCrossBlueShield: false,
    cigna: false,
    commonWealthCareAlliance: false,
    harvardPilgrim: false,
    humana: false,
    mgb: false,
    masshealth: false,
    medicare: false,
    tricare: false,
    tufts: false,
    United: false,
    wellsense: false,
  });

  useEffect(() => {
    fetch(`${URL}${endpoint}${clinicID}`)
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        setFormData(result.data.clinic);
      });
  }, [clinicID]);

  const handleChange = (event, type) => {
    let value = event.target.value;
    let name = event.target.name;

    if (name === "longitude" || name === "latitude") {
      value = parseFloat(value);
    }

    if (type === "checkbox") {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [event.target.name]: event.target.checked,
      }));
    } else {
      setFormData((prevFormData) => ({
        ...prevFormData,
        [name]: value,
      }));
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();


    fetch(`${URL}${endpoint}update/${clinicID}`, {
      method: "PUT",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => {
        console.log(result);
        navigate("../admin")
      });
  };

  

  return (
    <div>
      <main>
        <div className="main-container">
          <h1>Update a Listing</h1>
          <form onSubmit={handleSubmit} className="form-f">
            <p className="form-p">
              <label className="form-l" htmlFor="clinicName">
                Clinic Name: 
              </label>
              <input
                className="form-i"
                type="text"
                name="clinicName"
                id="clinicName"
                value={formData.clinicName}
               onChange={(e) => handleChange(e, "text")}
                required
              />
            </p>
            <p className="form-p">
              <label className="form-l" htmlFor="street">
                Street Address:
              </label>
              <input
                className="form-i"
                type="text"
                name="street"
                id="street"
                value={formData.street}
                onChange={(e)=>handleChange(e, "text")}
              />
            </p>

            {/* <p className="form-p">
              <label className="form-l" htmlFor="">
                City:
              </label>
              <input
                className="form-i"
                type="text"
                name=""
                id=""
                placeholder=""
                onChange={handleChange}
              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="">
                State:
              </label>
              <input
                className="form-i"
                type="text"
                name=""
                id=""
                placeholder=""
                onChange={handleChange}
              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="">
                Zip:
              </label>
              <input
                className="form-i"
                type="text"
                name=""
                id=""
                placeholder=""
                onChange={handleChange}
              />
            </p> */}
            <p className="form-p">
              <label className="form-l" htmlFor="phone">
                Phone:
              </label>
              <input
                className="form-i"
                type="text"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="website_url">
                Website:
              </label>
              <input
                className="form-i"
                type="text"
                name="website_url"
                id="website_url"
                value={formData.website_url}
                onChange={handleChange}
              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="latitude">
                Latitude:
              </label>
              <input
                className="form-i"
                type="text"
                name="latitude"
                id="latitude"
                value={formData.latitude}
onChange={(e) => handleChange(e, "text")}              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="longitude">
                Longitude:
              </label>
              <input
                className="form-i"
                type="text"
                name="longitude"
                id="longitude"
                value={formData.longitude}
               onChange={(e) => handleChange(e, "text")}
              />
            </p>

            <p className="form-p">
              <label className="form-l">Services Offered:</label>
            </p>
            <div className="form-i-group">
              <label htmlFor="primaryCare">Primary Care</label>
              <input
                type="checkbox"
                id="primaryCare"
                name="primaryCare"
                checked={formData.primaryCare}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="behavioralHealth">
                Counseling and Psychiatry
              </label>
              <input
                type="checkbox"
                id="behavioralHealth"
                name="behavioralHealth"
                checked={formData.behavioralHealth}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>
            <div className="form-i-group">
              <label htmlFor="surgicalTeam">Surgical Team</label>
              <input
                type="checkbox"
                id="surigcalTeam"
                name="surgicalTeam"
                checked={formData.surgicalTeam}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <p className="form-p">
              <label className="form-l">Insurances Accepted: </label>
            </p>
            <div className="form-i-group">
              <label htmlFor="aetna">Aetna</label>
              <input
                type="checkbox"
                id="aetna"
                name="aetna"
                checked={formData.aetna}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="blueCrossBlueShield">
                Blue Cross Blue Shield
              </label>
              <input
                type="checkbox"
                id="blueCrossBlueShield"
                name="blueCrossBlueShield"
                checked={formData.blueCrossBlueShield}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>
            <div className="form-i-group">
              <label htmlFor="cigna">Cigna</label>
              <input
                type="checkbox"
                id="cigna"
                name="cigna"
                checked={formData.cigna}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>
            <div className="form-i-group">
              <label htmlFor="commonWeathCareAlliance">
                Common Wealth Care Alliance
              </label>
              <input
                type="checkbox"
                id="commonWeathCareAlliance"
                name="commonWeathCareAlliance"
                checked={formData.commonWealthCareAlliance}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="harvardPilgrim">Harvard Pilgrim</label>
              <input
                type="checkbox"
                id="harvardPilgrim"
                name="harvardPilgrim"
                checked={formData.harvardPilgrim}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="humana">Humana</label>
              <input
                type="checkbox"
                id="humana"
                name="humana"
                checked={formData.humana}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="mgb">Mass General Brigham Health Plan</label>
              <input
                type="checkbox"
                id="mgb"
                name="mgb"
                checked={formData.mgb}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="masshealth">MassHealth</label>
              <input
                type="checkbox"
                id="masshealth"
                name="masshealth"
                checked={formData.masshealth}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="medicare">Medicare</label>
              <input
                type="checkbox"
                id="medicare"
                name="medicare"
                checked={formData.medicare}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="tricare">Tricare</label>
              <input
                type="checkbox"
                id="tricare"
                name="tricare"
                checked={formData.tricare}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="tufts">Tufts</label>
              <input
                type="checkbox"
                id="tufts"
                name="tufts"
                checked={formData.tufts}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="United">United</label>
              <input
                type="checkbox"
                id="United"
                name="United"
                checked={formData.United}
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <p className="text-center">
              <button onClick={handleSubmit}>Update Listing</button>
            </p>
            <Link className="text-center" to={"../admin"}>Cancel</Link>
            
          </form>
        </div>
      </main>
    </div>
  );
}
export default Update;
