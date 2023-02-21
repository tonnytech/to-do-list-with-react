/*eslint-disable */
import { useState } from "react";

const ControlledForm = () => {
  const [Name, setName] = useState({
    fname: "",
    lname: "",
    message: "",
    carBrand: "",
    isChecked: false,
    gender: '',
    price: 0
  });

  const handleChange = (e) => {
    const value = e.target.type === "checkbox" ? e.target.checked : e.target.value;
    setName({ ...Name,
        [e.target.name] : value
    })
  }
  const carBrands = ["Mercedes", "BMW", "Maserati", "Infinity", "Audi"];

  const carBrandOptions = carBrands.map((carBrand, key) => (
    <option value={carBrand} key={key}>
      {carBrand}
    </option>
  ));
  const handleSubmit = (e)=> {
    e.preventDefault();
    console.log(Name)
}


  return (
    <>
      <h1>controlled form section</h1>
      <form onSubmit={handleSubmit}>
        <label>
        First Name:{" "}
          <input type="text" value={Name.fname} name="fname" onChange = {handleChange} />
        </label>
        <label>
        Last Name:{" "}
          <input type="text" value={Name.lname} name="lname" onChange = {handleChange} />
        </label>
        <label>
        Your Message:
        <textarea
          name="message"
          value={Name.message}
          onChange={handleChange}
        />
      </label>
      <label>
        Car brand:
        <select
          name="carBrand"
          value={Name.carBrand}
          onChange={handleChange}
        >
          <option value={""} disabled>
            --Pick a car brand--
          </option>
          {carBrandOptions}
        </select>
      </label>
      <label>
        <input
          type="checkbox"
          name="isChecked"
          checked={Name.isChecked}
          onChange={handleChange}
        />
        Is Checked?
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="male"
          checked={Name.gender === "male"}
          onChange={handleChange}
        />{" "}
        Male
      </label>
      <label>
        <input
          type="radio"
          name="gender"
          value="female"
          checked={Name.gender === "female"}
          onChange={handleChange}
        />{" "}
        Female
      </label>
      <label>
        Price (between 0 and 50):
        <input
          type="range"
          name="price"
          min="0"
          max="50"
          value={Name.price}
          onChange={handleChange}
        />
      </label>
      <button type="submit">Submit</button>
      </form>
      <h5> First Name:  {Name.fname}</h5><h5>Price : ${Name.price}</h5>
      <h5> Last Name:  {Name.lname}</h5>
      <h5> Last Name:  {Name.message}</h5>
      <h5>Favorite car brand: {Name.carBrand}</h5>
      <h5>Is it checked? : {Name.isChecked ? "Yes" : "No"}</h5>
      <h5>Gender : {Name.gender}</h5>
    </>
  );
};

export default ControlledForm;
