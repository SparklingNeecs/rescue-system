import { Icon } from "@iconify/react";
import AdminLayout from "./alayout";
import { useState } from "react";

export default function UserAccount() {
  // Sample user data with checked state
  const [users, setUsers] = useState([
    {
      id: 1,
      name: "Kim Vilanueva",
      role: "VOLUNTEER",
      email: "KilmsV@gmail.com",
      contact: "09987624516",
      lastLogin: "March 29, 2029",
      status: "ACTIVE",
      checked: false
    },
    {
      id: 2,
      name: "Vernon Xed",
      role: "RESCUER",
      email: "Vernon@gmail.com",
      contact: "09987824516",
      lastLogin: "March 26, 2029",
      status: "INACTIVE",
      checked: false
    },
    {
      id: 3,
      name: "Whitney David",
      role: "VOLUNTEER",
      email: "Whitney@gmail.com",
      contact: "09987824712",
      lastLogin: "-",
      status: "PENDING",
      checked: false
    },
    {
      id: 4,
      name: "Charm Flores",
      role: "RESCUER",
      email: "Charms@gmail.com",
      contact: "09982368712",
      lastLogin: "February 2, 2029",
      status: "INACTIVE",
      checked: false
    },
    {
      id: 5,
      name: "Lim Vera",
      role: "CIVILIAN",
      email: "Limus@gmail.com",
      contact: "09982368712",
      lastLogin: "February 2, 2029",
      status: "INACTIVE",
      checked: false
    }
  ]);

  // Edit modal state
  const [editingUser, setEditingUser] = useState(null);
  const [showEditModal, setShowEditModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);
  const [deletingUser, setDeletingUser] = useState(null);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    contact: "",
    email: "",
    role: "VOLUNTEER",
    status: "ACTIVE",
    password: "**************"
  });

  // Handle checkbox change
  const handleCheckboxChange = (id) => {
    setUsers(users.map(user => 
      user.id === id ? { ...user, checked: !user.checked } : user
    ));
  };

  // Handle select all
  const handleSelectAll = (e) => {
    const checked = e.target.checked;
    setUsers(users.map(user => ({ ...user, checked })));
  };

  // Handle edit user - opens modal
  const handleEdit = (user) => {
    const nameParts = user.name.split(" ");
    setFormData({
      firstName: nameParts[0] || "",
      lastName: nameParts.slice(1).join(" ") || "",
      contact: user.contact || "",
      email: user.email || "",
      role: user.role || "VOLUNTEER",
      status: user.status || "ACTIVE",
      password: "**************"
    });
    setEditingUser(user);
    setShowEditModal(true);
  };

  // Handle form input change
  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // Handle save edited user
  const handleSaveUser = (e) => {
    e.preventDefault();
    const updatedUser = {
      ...editingUser,
      name: `${formData.firstName} ${formData.lastName}`,
      contact: formData.contact,
      email: formData.email,
      role: formData.role,
      status: formData.status
    };
    setUsers(users.map(user => 
      user.id === editingUser.id ? updatedUser : user
    ));
    setShowEditModal(false);
    setEditingUser(null);
  };

  // Handle close modal
  const handleCloseModal = () => {
    setShowEditModal(false);
    setEditingUser(null);
  };

  // Handle activate/deactivate user
  const handleToggleStatus = (user) => {
    const newStatus = user.status === "ACTIVE" ? "INACTIVE" : "ACTIVE";
    setUsers(users.map(u => 
      u.id === user.id ? { ...u, status: newStatus } : u
    ));
  };

  // Handle delete user - opens modal
  const handleDeleteClick = (user) => {
    setDeletingUser(user);
    setShowDeleteModal(true);
  };

  // Handle confirm delete
  const handleConfirmDelete = () => {
    if (deletingUser) {
      setUsers(users.filter(u => u.id !== deletingUser.id));
      setShowDeleteModal(false);
      setDeletingUser(null);
    }
  };

  // Handle cancel delete
  const handleCancelDelete = () => {
    setShowDeleteModal(false);
    setDeletingUser(null);
  };

  const getStatusColor = (status) => {
    switch(status) {
      case "ACTIVE": return "bg-[#D5FFE5] border border-[#15803D] text-[#15803D] font-medium rounded-sm";
      case "INACTIVE": return "bg-[#FDE6EA] border border-[#DC2626] text-[#DC2626] font-medium rounded-sm";
      case "PENDING": return "bg-[#FCE3AE] border border-[#E1791E] text-[#E1791E] font-medium rounded-sm";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const getRoleColor = (role) => {
    switch(role) {
      case "VOLUNTEER": return "bg-[#D5FFE5] border border-[#15803D] text-[#15803D] font-medium rounded-sm";
      case "RESCUER": return "bg-[#CBE8FF] border border-[#4285F4] text-[#4285F4] font-medium rounded-sm";
      case "CIVILIAN": return "bg-[#EAE9F9] border border-[#6C63FF] text-[#6C63FF] font-medium rounded-sm";
      default: return "bg-gray-100 text-gray-700";
    }
  };

  const isAllChecked = users.every(user => user.checked);

  return (
    <AdminLayout>
      <div className="flex-1 overflow-y-auto p-6 bg-[#FAFAFF]">
        
        {/* Header */}
        <div className="mb-6">
          <h1 className="text-2xl font-semibold text-[#262D31]">User Account</h1>
          <p className="text-gray-500 text-sm">Manage all registered accounts across all roles</p>
        </div>

        {/* Search and Filters */}
        <div className="flex flex-wrap items-center gap-4 mb-6">
          <div className="relative w-[250px]">
            <input
              type="text"
              placeholder="Search ID, type, location..."
              className="w-full border border-[#D3D2DE] rounded-lg px-4 py-2 pl-10 text-sm font-light focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
            />
            <Icon 
              icon="material-symbols:search" 
              className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400"
            />
          </div>
          
          <div className="relative">
            <select className="appearance-none border border-[#D3D2DE] rounded-lg px-4 py-2 pr-8 text-sm font-light bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[120px]">
              <option>All Roles</option>
              <option>VOLUNTEER</option>
              <option>RESCUER</option>
              <option>CIVILIAN</option>
            </select>
            <Icon 
              icon="mdi:chevron-down" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            />
          </div>
          
          <div className="relative">
            <select className="appearance-none border border-[#D3D2DE] rounded-lg px-4 py-2 pr-8 text-sm font-light bg-white focus:outline-none focus:ring-2 focus:ring-blue-500 min-w-[120px]">
              <option>All Status</option>
              <option>ACTIVE</option>
              <option>INACTIVE</option>
              <option>PENDING</option>
            </select>
            <Icon 
              icon="mdi:chevron-down" 
              className="absolute right-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400 pointer-events-none"
            />
          </div>
        </div>

        {/* Users Table */}
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead className="bg-gray-50">
                <tr>
                  <th className="px-4 py-3 text-left">
                    <input
                      type="checkbox"
                      checked={isAllChecked}
                      onChange={handleSelectAll}
                      className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                    />
                  </th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">User</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Role</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Email</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Contact</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Last Login</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Status</th>
                  <th className="px-4 py-3 text-left text-xs font-medium text-[#000000] uppercase tracking-wider">Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50 transition">
                    <td className="px-4 py-3">
                      <input
                        type="checkbox"
                        checked={user.checked}
                        onChange={() => handleCheckboxChange(user.id)}
                        className="w-4 h-4 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                      />
                    </td>
                    <td className="px-4 py-3 text-sm font-medium text-gray-900">{user.name}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block min-w-[100px] text-center px-3 py-1 text-xs rounded-full font-medium ${getRoleColor(user.role)}`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{user.email}</td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{user.contact}</td>
                    <td className="px-4 py-3 text-sm text-[#000000]">{user.lastLogin}</td>
                    <td className="px-4 py-3">
                      <span className={`inline-block min-w-[80px] text-center px-3 py-1 text-xs rounded-full ${getStatusColor(user.status)}`}>
                        {user.status}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-2">
                        <button 
                          onClick={() => handleEdit(user)}
                          className="text-blue-600 hover:text-blue-800 transition"
                          title="Edit User"
                        >
                          <Icon icon="mdi:pencil" className="w-5 h-5" />
                        </button>
                        
                        <button 
                          onClick={() => handleToggleStatus(user)}
                          className={`transition ${
                            user.status === "ACTIVE" 
                              ? "text-green-600 hover:text-green-800" 
                              : "text-yellow-600 hover:text-yellow-800"
                          }`}
                          title={user.status === "ACTIVE" ? "Deactivate User" : "Activate User"}
                        >
                          <Icon icon={user.status === "ACTIVE" ? "mdi:check-circle" : "mdi:clock"} className="w-5 h-5" />
                        </button>
                        
                        <button 
                          onClick={() => handleDeleteClick(user)}
                          className="text-red-600 hover:text-red-800 transition"
                          title="Delete User"
                        >
                          <Icon icon="mdi:delete" className="w-5 h-5" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>

      {/* Edit User Modal */}
      {showEditModal && editingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-[600px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-4 border-b-2 border-t-8 border-[#4285F4] flex justify-between items-center rounded-t-lg">
              <h2 className="text-lg font-semibold text-[#262D31]">
                EDIT USER - {editingUser.name.toUpperCase()}
              </h2>
              <button
                onClick={handleCloseModal}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <Icon icon="mdi:close" className="w-6 h-6" />
              </button>
            </div>

            {/* Form - Two Column */}
            <form onSubmit={handleSaveUser} className="p-6">
              <div className="grid grid-cols-2 gap-4">
                {/* First Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleFormChange}
                    className="w-full border border-[#D3D2DE] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Last Name */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleFormChange}
                    className="w-full border border-[#D3D2DE] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Contact Number */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Contact No.
                  </label>
                  <input
                    type="text"
                    name="contact"
                    value={formData.contact}
                    onChange={handleFormChange}
                    className="w-full border border-[#D3D2DE] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Email Address */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleFormChange}
                    className="w-full border border-[#D3D2DE] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                    required
                  />
                </div>

                {/* Role */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Role
                  </label>
                  <select
                    name="role"
                    value={formData.role}
                    onChange={handleFormChange}
                    className="w-full border border-[#D3D2DE] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="VOLUNTEER">Volunteer</option>
                    <option value="RESCUER">Rescuer</option>
                    <option value="CIVILIAN">Civilian</option>
                  </select>
                </div>

                {/* Status */}
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleFormChange}
                    className="w-full border border-[#D3D2DE] rounded-sm px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
                  >
                    <option value="ACTIVE">Active</option>
                    <option value="INACTIVE">Inactive</option>
                    <option value="PENDING">Pending</option>
                  </select>
                </div>

                {/* Password - Full Width */}
                <div className="col-span-2">
                  <label className="block text-sm font-medium text-gray-700 mb-1">
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    value={formData.password}
                    onChange={handleFormChange}
                    className="w-full border border-[#D3D2DE] rounded-lg px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-50"
                    disabled
                  />
                </div>
              </div>

              {/* Buttons */}
              <div className="flex justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-lg">
                <button
                  type="button"
                  onClick={handleCloseModal}
                  className="px-8 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-8 py-2 bg-[#0C7FDA] text-[#C6E6FF] rounded-lg text-sm font-medium hover:bg-[#2674b4] transition"
                >
                  Save Account
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* Delete User Modal */}
      {showDeleteModal && deletingUser && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50">
          <div className="bg-white rounded-lg shadow-xl w-[450px] max-h-[90vh] overflow-y-auto">
            {/* Header */}
            <div className="p-4 border-b border-[#DC2626] border-t-8 flex justify-between items-center rounded-t-lg">
              <h2 className="text-lg font-semibold text-[#262D31]">
                Delete user {deletingUser.name}
              </h2>
              <button
                onClick={handleCancelDelete}
                className="text-gray-400 hover:text-gray-600 transition"
              >
                <Icon icon="mdi:close" className="w-6 h-6" />
              </button>
            </div>

            {/* Content */}
            <div className="p-6">
              <div className="flex items-start gap-3">
                <div className="text-red-500 text-2xl">
                  <Icon icon="mdi:alert-circle" className="w-8 h-8" />
                </div>
                <div>
                  <p className="text-gray-700 text-sm">
                    Are you sure you want to delete <strong>{deletingUser.name}</strong>? This action cannot be undone.
                  </p>
                </div>
              </div>
            </div>

            {/* Buttons */}
            <div className="flex justify-end gap-3 p-4 border-t bg-gray-50 rounded-b-lg">
              <button
                onClick={handleCancelDelete}
                className="px-6 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 hover:bg-gray-50 transition"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmDelete}
                className="px-6 py-2 bg-[#DC2626] text-white rounded-lg text-sm font-medium hover:bg-[#c11f1f] transition"
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
    </AdminLayout>
  );
}