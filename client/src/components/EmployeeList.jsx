import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-pink-50 via-purple-100 to-indigo-50 py-12 px-4 sm:px-6 lg:px-8">
      {/* Center Box with Increased Size and Shadow */}
      <div className="max-w-7xl mx-auto bg-white p-12 rounded-lg shadow-2xl space-y-6 bg-gradient-to-r from-violet-50 via-violet-100 to-indigo-50">
        <h2 className="text-3xl font-semibold text-center text-gray-900">Employee List</h2>
        <table className="min-w-full table-auto mt-6">
          <thead>
            <tr className="bg-violet-200">
              <th className="p-4 text-left text-sm font-medium text-gray-900 border-r border-white">Name</th>
              <th className="p-4 text-left text-sm font-medium text-gray-900 border-r border-white">Post</th>
              <th className="p-4 text-left text-sm font-medium text-gray-900 border-r border-white">Email</th>
              <th className="p-4 text-left text-sm font-medium text-gray-900 border-r border-white">Mobile</th>
              <th className="p-4 text-left text-sm font-medium text-gray-900 border-r border-white">Bank Account</th>
              <th className="p-4 text-left text-sm font-medium text-gray-900 border-r border-white">PF Number</th>
              <th className="p-4 text-left text-sm font-medium text-gray-900">Photo</th>
            </tr>
          </thead>
          <tbody>
            {employees.map((emp) => (
              <tr key={emp.id} className="border-b hover:bg-violet-50 transition">
                <td className="p-4 text-sm text-gray-700 border-b border-r border-white">{emp.name}</td>
                <td className="p-4 text-sm text-gray-700 border-b border-r border-white">{emp.post}</td>
                <td className="p-4 text-sm text-gray-700 border-b border-r border-white">{emp.email}</td>
                <td className="p-4 text-sm text-gray-700 border-b border-r border-white">{emp.mobile}</td>
                <td className="p-4 text-sm text-gray-700 border-b border-r border-white">{emp.bank_account}</td>
                <td className="p-4 text-sm text-gray-700 border-b border-r border-white">{emp.pf_number}</td>
                <td className="p-4">
                  <img
                    src={emp.photo}
                    alt="employee"
                    className="h-12 w-12 object-cover rounded-full border-2 border-violet-300"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EmployeeList;
