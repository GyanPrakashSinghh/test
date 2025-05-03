// client/src/components/AddEmployee.jsx
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddEmployee = () => {
  const [employee, setEmployee] = useState({
    name: "",
    address: "",
    email: "",
    mobile: "",
    post: "",
    bank_account: "",
    pf_number: "",
    photo: ""
  });

  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/api/employees", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(employee),
    })
      .then((response) => response.json())
      .then((data) => {
        if (data.success) {
          navigate("/employee-list");
        }
      })
      .catch((error) => console.error("Error:", error));
  };

  return (
    <div className="p-8">
      <h2 className="text-xl font-bold mb-6">Add New Employee</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Employee Name"
          value={employee.name}
          onChange={handleInputChange}
          className="p-3 w-full rounded border"
        />
        <input
          type="text"
          name="address"
          placeholder="Employee Address"
          value={employee.address}
          onChange={handleInputChange}
          className="p-3 w-full rounded border"
        />
        <input
          type="email"
          name="email"
          placeholder="Employee Email"
          value={employee.email}
          onChange={handleInputChange}
          className="p-3 w-full rounded border"
        />
        <input
          type="text"
          name="mobile"
          placeholder="Employee Mobile"
          value={employee.mobile}
          onChange={handleInputChange}
          className="p-3 w-full rounded border"
        />
        <input
          type="text"
          name="post"
          placeholder="Post"
          value={employee.post}
          onChange={handleInputChange}
          className="p-3 w-full rounded border"
        />
        <input
          type="text"
          name="bank_account"
          placeholder="Bank Account"
          value={employee.bank_account}
          onChange={handleInputChange}
          className="p-3 w-full rounded border"
        />
        <input
          type="text"
          name="pf_number"
          placeholder="PF Number"
          value={employee.pf_number}
          onChange={handleInputChange}
          className="p-3 w-full rounded border"
        />
        <input
          type="file"
          name="photo"
          onChange={(e) => setEmployee({ ...employee, photo: URL.createObjectURL(e.target.files[0]) })}
          className="p-3 w-full rounded border"
        />
        <button type="submit" className="px-4 py-2 bg-violet-500 text-white rounded hover:bg-violet-600 transition">
          Add Employee
        </button>
      </form>
    </div>
  );
};

export default AddEmployee;
