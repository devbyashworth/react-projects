import { useState } from "react";

const strengthLabels = ["weak", "medium", "strong", "very-strong", "ultra"];

const EyeIcon = () => <span>👁</span>;
const EyeOffIcon = () => <span>🙈</span>;

const App = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirm: "",
  });

  const [strength, setStrength] = useState("");
  const [visible, setVisible] = useState(false);
  const [errors, setErrors] = useState({});

  const getStrength = (password) => {
    let score = -1;
    if (/[a-z]/.test(password)) score++;
    if (/[A-Z]/.test(password)) score++;
    if (/\d/.test(password)) score++;
    if (/[^a-zA-Z0-9]/.test(password)) score++;
    if (password.length >= 12) score++;
    return strengthLabels[score] || "";
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm((prev) => ({
      ...prev,
      [name]: value,
    }));

    if (name === "password") {
      setStrength(getStrength(value));
    }
  };

  const validate = () => {
    const newErrors = {};

    if (!form.name.trim()) newErrors.name = "Name is required";
    if (!form.email.includes("@")) newErrors.email = "Valid email required";
    if (form.password.length < 6) newErrors.password = "Password too short";
    if (form.password !== form.confirm)
      newErrors.confirm = "Passwords do not match";

    return newErrors;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validation = validate();
    setErrors(validation);

    if (Object.keys(validation).length === 0) {
      console.log("Form submitted:", form);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <h2>Create Account</h2>

      {/* NAME */}
      <div className="textbox">
        <input name="name" value={form.name} onChange={handleChange} required />
        <label>Full Name</label>
      </div>
      {errors.name && <p className="error">{errors.name}</p>}

      {/* EMAIL */}
      <div className="textbox">
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          required
        />
        <label>Email</label>
      </div>
      {errors.email && <p className="error">{errors.email}</p>}

      {/* PASSWORD */}
      <div className="textbox">
        <input
          type={visible ? "text" : "password"}
          name="password"
          value={form.password}
          onChange={handleChange}
          required
        />
        <label>Password</label>

        <button
          type="button"
          className="toggle-visibility"
          onClick={() => setVisible((v) => !v)}
        >
          {visible ? <EyeOffIcon /> : <EyeIcon />}
        </button>
      </div>

      <div className={`bars ${strength}`}>
        <div></div>
      </div>
      <div className="strength">{strength && `${strength} password`}</div>
      {errors.password && <p className="error">{errors.password}</p>}

      {/* CONFIRM PASSWORD */}
      <div className="textbox">
        <input
          type="password"
          name="confirm"
          value={form.confirm}
          onChange={handleChange}
          required
        />
        <label>Confirm Password</label>
      </div>
      {errors.confirm && <p className="error">{errors.confirm}</p>}

      {/* SUBMIT */}
      <button type="submit" className="submit-btn">
        Create Account
      </button>
    </form>
  );
};

export default App;
