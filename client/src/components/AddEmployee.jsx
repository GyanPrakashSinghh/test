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
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-pink-50 via-purple-100 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl w-full bg-gradient-to-r from-pink-50 via-purple-100 to-indigo-50 shadow-xl rounded-lg p-8 space-y-6 hover:shadow-2xl transition-all duration-300">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Add New Employee</h2>
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="name" className="text-sm font-medium text-gray-700">Employee Name</label>
              <input
                type="text"
                id="name"
                name="name"
                placeholder="Employee Name"
                value={employee.name}
                onChange={handleInputChange}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="address" className="text-sm font-medium text-gray-700">Employee Address</label>
              <input
                type="text"
                id="address"
                name="address"
                placeholder="Employee Address"
                value={employee.address}
                onChange={handleInputChange}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">Employee Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Employee Email"
                value={employee.email}
                onChange={handleInputChange}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="mobile" className="text-sm font-medium text-gray-700">Employee Mobile</label>
              <input
                type="text"
                id="mobile"
                name="mobile"
                placeholder="Employee Mobile"
                value={employee.mobile}
                onChange={handleInputChange}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="post" className="text-sm font-medium text-gray-700">Post</label>
              <input
                type="text"
                id="post"
                name="post"
                placeholder="Post"
                value={employee.post}
                onChange={handleInputChange}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="bank_account" className="text-sm font-medium text-gray-700">Bank Account</label>
              <input
                type="text"
                id="bank_account"
                name="bank_account"
                placeholder="Bank Account"
                value={employee.bank_account}
                onChange={handleInputChange}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
            <div className="flex flex-col">
              <label htmlFor="pf_number" className="text-sm font-medium text-gray-700">PF Number</label>
              <input
                type="text"
                id="pf_number"
                name="pf_number"
                placeholder="PF Number"
                value={employee.pf_number}
                onChange={handleInputChange}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
                required
              />
            </div>
            <div className="flex flex-col">
              <label htmlFor="photo" className="text-sm font-medium text-gray-700">Employee Photo</label>
              <input
                type="file"
                id="photo"
                name="photo"
                onChange={(e) => setEmployee({ ...employee, photo: URL.createObjectURL(e.target.files[0]) })}
                className="mt-2 p-4 border rounded-md focus:ring-violet-500 focus:border-violet-500 shadow-sm hover:border-violet-400 transition-all duration-300"
              />
            </div>
          </div>

          <div className="flex justify-center mt-6">
            <button
              type="submit"
              className="w-full py-3 bg-violet-500 text-white rounded-lg hover:bg-violet-600 transition duration-200"
            >
              Add Employee
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddEmployee;
