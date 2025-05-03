// client/src/components/EmployeeList.jsx
import { useEffect, useState } from "react";

const EmployeeList = () => {
  const [employees, setEmployees] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/employees")
      .then((response) => response.json())
      .then((data) => setEmployees(data));
  }, []);

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold">Employee List</h2>
      <table className="min-w-full table-auto mt-6">
        <thead>
          <tr className="bg-violet-300">
            <th className="p-3">Name</th>
            <th className="p-3">Post</th>
            <th className="p-3">Email</th>
            <th className="p-3">Mobile</th>
            <th className="p-3">Bank Account</th>
            <th className="p-3">PF Number</th>
            <th className="p-3">Photo</th>
          </tr>
        </thead>
        <tbody>
          {employees.map((emp) => (
            <tr key={emp.id} className="border-b hover:bg-violet-100 transition">
              <td className="p-3">{emp.name}</td>
              <td className="p-3">{emp.post}</td>
              <td className="p-3">{emp.email}</td>
              <td className="p-3">{emp.mobile}</td>
              <td className="p-3">{emp.bank_account}</td>
              <td className="p-3">{emp.pf_number}</td>
              <td className="p-3">
                <img src={emp.photo} alt="employee" className="h-10 w-10 object-cover rounded-full" />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default EmployeeList;
