"use client";

import { useState, useEffect } from "react";

export function User() {
  const [firstName, setFirstName] = useState("Taylor");
  const [lastName, setLastName] = useState("Swift");

  const [fullName, setFullName] = useState("");

  useEffect(() => {
    setFullName(firstName + " " + lastName);
  }, [firstName, lastName]);

  return (
    <div>
      <p>{fullName}</p>
      <input
        type="text"
        onChange={(e) => setFirstName(e.target.value)}
        placeholder="First name"
      />
      <input
        type="text"
        onChange={(e) => setLastName(e.target.value)}
        placeholder="Last name"
      />
    </div>
  );
}
