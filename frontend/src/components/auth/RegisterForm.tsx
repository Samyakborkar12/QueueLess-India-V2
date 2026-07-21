"use client";

import { useState } from "react";
import { registerUser } from "../../services/auth.service";
export default function RegisterForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");

  const handleRegister = async (
    e: React.FormEvent
  ) => {
    e.preventDefault();

    const { error } = await registerUser(
      email,
      password
    );

    if (error) {
      setMessage(error.message);
      return;
    }

    setMessage(
      "Registration successful. Check email."
    );
  };

  return (
    <form
      onSubmit={handleRegister}
      className="flex flex-col gap-4 w-full max-w-md"
    >
      <h2 className="text-2xl font-bold">
        Register
      </h2>

      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) =>
          setEmail(e.target.value)
        }
        className="border p-3 rounded"
      />

      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) =>
          setPassword(e.target.value)
        }
        className="border p-3 rounded"
      />

      <button
        type="submit"
        className="bg-black text-white p-3 rounded"
      >
        Register
      </button>

      {message && <p>{message}</p>}
    </form>
  );
}