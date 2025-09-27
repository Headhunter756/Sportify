import { useEffect } from 'react'

const Turf = () => {

  useEffect(() => {
    const registrationForm = document.getElementById("registrationForm")
    registrationForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert('Registration form submitted!');
      registrationForm.reset();
      registrationForm.classList.add('hidden');
    });
  }, [])

  async function turfreg() {
    const response = await fetch("")
  }

  return (
    <>
      <div className="container">
        <h2>Turf Register</h2>
        <form id="registrationForm" className="hidden">
          <label htmlFor="turfName">Turf Name</label>
          <input type="text" id="turfName" name="turfName" required />

          <label htmlFor="ownerName">Owner Name</label>
          <input type="text" id="ownerName" name="ownerName" required />

          <label htmlFor="ownerId">Owner Identity</label>
          <select id="ownerIdentityType" name="ownerIdentityType" required>
            <option value="">Select Identity Proof</option>
            <option value="Aadhar Card">Aadhar Card</option>
            <option value="Pan Card">Pan Card</option>
            <option value="Passport">Passport</option>
            <option value="Voter ID">Voter ID</option>
            <option value="Driving License">Driving License</option>
            <option value="Ration Card">Ration Card</option>
            <option value="Utility Bill">Utility Bill</option>
          </select>

          <label htmlFor="idproof">Add Proof</label>
          <input type="file" name="idproof" id="idproof" accept='.jpg, .jpeg, .png, .pdf' required />

          <label htmlFor="turfAddress">Turf Address</label>
          <textarea id="turfAddress" name="turfAddress" rows="3" required></textarea>

          <label htmlFor="noOfTurf">No. of Turf</label>
          <input type="number" id="noOfTurf" name="noOfTurf" min="1" required />

          <label htmlFor="contactNo">Contact no.</label>
          <input type="tel" id="contactNo" name="contactNo" pattern="[0-9]{10}" placeholder="10-digit number" required />

          <label htmlFor="email">E-mail</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="turfproof">Proof of Turf</label>
          <input type="file" id="turfproof" name="turfproof" accept=".jpg, .jpeg, .png, .pdf" required />

          <button type="submit" >Submit</button>
        </form>
      </div>
    </>
  )
}

export default Turf
