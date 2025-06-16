function Update() {
  return (
    <div>
      <main>
        <div className="main-container">
          <h1>Update a Listing</h1>
          <form className="form-f">
            <p className="form-p">
              <label className="form-l" htmlFor="hospitalName">
                Clinic Name:{" "}
              </label>
              <select className="form-i" name="insurance" id="insurance">
                <option value="pleasechoose" selected disabled>
                  --Select--
                </option>
                <option value="MGH">Massachussets General Hospital</option>
                <option value="BWH">Brigham and Women's Hospital</option>
                <option value="Fenway">Fenway Health</option>
                <option value="BMC">Boston Medical Center</option>
              </select>
            </p>
            <p className="form-p">
              <label className="form-l" htmlFor="address">
                Address:
              </label>
              <input
                className="form-i"
                type="text"
                name="address"
                id="address"
                placeholder="Address"
                required
              />
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="addressLine2">
                Address Line 2 (Optional):
              </label>
              <input
                className="form-i"
                type="text"
                name="addressLine2"
                id="addressLine2"
                placeholder="Address Line 2"
              />
            </p>

            <p className="form-p">
              <label className="form-l">Services Offered:</label>
            </p>
            <input
              type="checkbox"
              id="service1"
              name="service1"
              value="service1"
            />
            <label htmlFor="service1"> Service 1</label>
            <br />
            <input
              type="checkbox"
              id="service2"
              name="service2"
              value="service2"
            />
            <label htmlFor="service2">Service 2</label>
            <br />
            <input
              type="checkbox"
              id="service3"
              name="service3"
              value="service3"
            />
            <label htmlFor="service3"> Service 3</label>

            <p className="form-p">
              <label className="form-l" htmlFor="insurance">
                Insurance Information:
              </label>
              <select className="form-i" name="insurance" id="insurance">
                <option value="pleasechoose" selected disabled>
                  --Select--
                </option>
                <option value="MassHealth">MassHealth</option>
                <option value="Blue Cross Blue Shield">
                  Blue Cross Blue Shield
                </option>
                <option value="Tufts">Tufts</option>
                <option value="Harvard Pilgrim">Harvard Pilgrim</option>
                <option value="Other">Other</option>
              </select>
            </p>

            <p className="form-p">
              <label className="form-l" htmlFor="otherInfo">
                Other Information:
              </label>
              <textarea className="form-i" name="otherInfo" id="otherInfo">
                
              </textarea>
            </p>
            <p className="text-center">
              <button>SUBMIT</button>
            </p>
          </form>
        </div>
      </main>
    </div>
  );
}

export default Update;
