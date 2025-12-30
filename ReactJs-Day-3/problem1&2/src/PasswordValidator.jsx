import { useState } from "react";

export default function PasswordValidator() {
  const [password, setPassword] = useState("");

  const hasLength = password.length >= 8;
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^A-Za-z0-9]/.test(password);

  const score = [hasLength, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  let borderColor = "red";
  if (score >= 2 && score <= 3) borderColor = "orange";
  if (score === 4) borderColor = "green";

  return (
    <div>
      <h2>Password Strength Validator</h2>

      <input
        type="password"
        value={password}
        onChange={e => setPassword(e.target.value)}
        style={{ border: `2px solid ${borderColor}`, padding: "8px" }}
        placeholder="Enter password"
      />

      <ul>
        <li>{hasLength ? "✓" : "✗"} Minimum 8 characters</li>
        <li>{hasUpper ? "✓" : "✗"} Uppercase letter</li>
        <li>{hasNumber ? "✓" : "✗"} Number</li>
        <li>{hasSpecial ? "✓" : "✗"} Special character</li>
      </ul>
    </div>
  );
}
