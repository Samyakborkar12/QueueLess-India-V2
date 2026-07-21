"use client";

import { useState } from "react";

export default function JoinQueueForm() {
  const [hospital, setHospital] = useState("");
  const [department, setDepartment] = useState("");

  const handleSubmit = (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    alert(
      `Joined Queue\nHospital: ${hospital}\nDepartment: ${department}`
    );
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white p-6 rounded-xl shadow-md"
    >
      <h2 className="text-2xl font-bold mb-4">
        Join Queue
      </h2>

      <select
        className="border p-3 rounded w-full mb-4"
        value={hospital}
        onChange={(e) =>
          setHospital(e.target.value)
        }
      >
        <option value="">
          Select Hospital
        </option>

        <option value="City Hospital">
          City Hospital
        </option>

        <option value="Apollo Clinic">
          Apollo Clinic
        </option>
      </select>

      <select
        className="border p-3 rounded w-full mb-4"
        value={department}
        onChange={(e) =>
          setDepartment(e.target.value)
        }
      >
        <option value="">
          Select Department
        </option>

        <option value="General Medicine">
          General Medicine
        </option>

        <option value="Dental">
          Dental
        </option>
      </select>

      <button
        className="bg-blue-600 text-white px-5 py-3 rounded-lg w-full"
      >
        Join Queue
      </button>
    </form>
  );
}