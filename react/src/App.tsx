import { useState } from "react";

type FormData = {
  email: string;
  password: string;
};

export default function LoginForm() {
  const [form, setForm] = useState<FormData>({
    email: "",
    password: ""
  });

  const [error, setError] = useState<string>("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ): void => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent): void => {
    e.preventDefault();

    if (!form.email.includes("@")) {
      setError("Email không hợp lệ");
      return;
    }

    if (form.password.length < 6) {
      setError("Password >= 6 ký tự");
      return;
    }

    setError("");
    alert("Login success");
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        name="email"
        value={form.email}
        onChange={handleChange}
      />

      <input
        name="password"
        type="password"
        value={form.password}
        onChange={handleChange}
      />

      <button type="submit">Login</button>

      {error && <p>{error}</p>}
    </form>
  );
}