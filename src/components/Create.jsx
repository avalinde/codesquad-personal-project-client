import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

function Create() {
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

  const navigate = useNavigate();

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
    console.log("submitted");

    const URL =
      "https://ic-directory-server.onrender.com/api/clinics/create/new";

    fetch(URL, {
      method: "POST",
      headers:{"Content-type":"application/json"},
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((result) => console.log(result));
       navigate("../admin")
  };

  console.log(formData);

  return (
    <div>
      <main>
        <div className="main-container">
          <h1>Create a New Listing</h1>
          <form className="form-f" onSubmit={handleSubmit}>
            <p className="form-p">
              <label className="form-l" htmlFor="clinicName">
                Clinic Name:
              </label>
              <input
                className="form-i"
                type="text"
                name="clinicName"
                id="clinicName"
                placeholder="Name of Clinic"
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
                onChange={(e) => handleChange(e, "text")}
                placeholder="Address"
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
                placeholder="Phone"
                onChange={(e) => handleChange(e, "text")}
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
                onChange={(e) => handleChange(e, "text")}
                placeholder="e.g. www.hospitalname.org"
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
                placeholder="42.3555"
                onChange={(e) => handleChange(e, "number")}
              />
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
                placeholder="71.0565"
                onChange={(e) => handleChange(e, "number")}
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
                value="primaryCare"
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
                value="behavioralHealth"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>
            <div className="form-i-group">
              <label htmlFor="surgicalTeam">Surgical Team</label>
              <input
                type="checkbox"
                id="surigcalTeam"
                name="surgicalTeam"
                value="surgicalTeam"
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
                value="aetna"
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
                value="blueCrossBlueShield"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>
            <div className="form-i-group">
              <label htmlFor="cigna">Cigna</label>
              <input type="checkbox" id="cigna" name="cigna" value="cigna" />
            </div>
            <div className="form-i-group">
              <label htmlFor="commonWeathCareAlliance">
                Common Wealth Care Alliance
              </label>
              <input
                type="checkbox"
                id="commonWeathCareAlliance"
                name="commonWeathCareAlliance"
                value="commonWeathCareAlliance"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="harvardPilgrim">Harvard Pilgrim</label>
              <input
                type="checkbox"
                id="harvardPilgrim"
                name="harvardPilgrim"
                value="harvardPilgrim"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="humana">Humana</label>
              <input type="checkbox" id="humana" name="humana" value="humana" />
            </div>

            <div className="form-i-group">
              <label htmlFor="mgb">Mass General Brigham Health Plan</label>
              <input
                type="checkbox"
                id="mgb"
                name="mgb"
                value="mgb"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="masshealth">MassHealth</label>
              <input
                type="checkbox"
                id="masshealth"
                name="masshealth"
                value="masshealth"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="medicare">Medicare</label>
              <input
                type="checkbox"
                id="medicare"
                name="medicare"
                value="medicare"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="tricare">Tricare</label>
              <input
                type="checkbox"
                id="tricare"
                name="tricare"
                value="tricare"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="tufts">Tufts</label>
              <input
                type="checkbox"
                id="tufts"
                name="tufts"
                value="tufts"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="United">United</label>
              <input
                type="checkbox"
                id="United"
                name="United"
                value="United"
                onChange={(e) => handleChange(e, "checkbox")}
              />
            </div>

            <p className="text-center">
              <button>SUBMIT</button>
            </p>
            <Link className="text-center" to={"../admin"}>Cancel</Link>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Create;
