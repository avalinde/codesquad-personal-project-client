function Create() {
  return (
    <div>
      <main>
        <div className="main-container">
          <h1>Create a New Listing</h1>
          <form className="form-f">
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
                placeholder="e.g. www.hospitalname.org"
              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="latitude">
                Latitude:
              </label>
              <input
                className="form-i"
                type="number"
                name="latitude"
                id="latitude"
                placeholder="42.3555"
              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="longitude">
                Longitude:
              </label>
              <input
                className="form-i"
                type="number"
                name="longitude"
                id="longitude"
                placeholder="71.0565"
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
              />
            </div>
            <div className="form-i-group">
              <label htmlFor="surgicalTeam">Surgical Team</label>
              <input
                type="checkbox"
                id="surigcalTeam"
                name="surgicalTeam"
                value="surgicalTeam"
              />
            </div>

            <p className="form-p">
              <label className="form-l">Insurances Accepted: </label>
            </p>
            <div className="form-i-group">
              <label htmlFor="aetna">Aetna</label>
              <input type="checkbox" id="aetna" name="aetna" value="aetna" />
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
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="harvardPilgrim">Harvard Pilgrim</label>
              <input
                type="checkbox"
                id="harvardPilgrim"
                name="harvardPilgrim"
                value="harvardPilgrim"
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="humana">Humana</label>
              <input type="checkbox" id="humana" name="humana" value="humana" />
            </div>

            <div className="form-i-group">
              <label htmlFor="mgb">Mass General Brigham Health Plan</label>
              <input type="checkbox" id="mgb" name="mgb" value="mgb" />
            </div>

            <div className="form-i-group">
              <label htmlFor="masshealth">MassHealth</label>
              <input
                type="checkbox"
                id="masshealth"
                name="masshealth"
                value="masshealth"
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="medicare">Medicare</label>
              <input
                type="checkbox"
                id="medicare"
                name="medicare"
                value="medicare"
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="tricare">Tricare</label>
              <input
                type="checkbox"
                id="tricare"
                name="tricare"
                value="tricare"
              />
            </div>

            <div className="form-i-group">
              <label htmlFor="tufts">Tufts</label>
              <input type="checkbox" id="tufts" name="tufts" value="tufts" />
            </div>

            <div className="form-i-group">
              <label htmlFor="United">United</label>
              <input type="checkbox" id="United" name="United" value="United" />
            </div>

            <p className="text-center">
              <button>SUBMIT</button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Create;
