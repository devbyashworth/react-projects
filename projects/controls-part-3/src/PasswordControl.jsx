import { useId, useState } from "react";

export const Icon = ({ children }) => (
  <span className="material-symbols-outlined icon">{children}</span>
);

const PasswordControl = ({ name = "Password", value = "", onInput }) => {
  const [showPassword, setShowPassword] = useState(false);
  const id = useId();

  const handleChange = (e) => {
    onInput?.(name, e.target.value);
  };

  return (
    <div className="password-control">
      <input
        id={id}
        name={name}
        type={showPassword ? "text" : "password"}
        value={value}
        onChange={handleChange}
        required
      />

      <label htmlFor={id}>{name}</label>

      <Icon>lock</Icon>

      <button
        type="button"
        onClick={() => setShowPassword((prev) => !prev)}
        aria-label={showPassword ? "Hide password" : "Show password"}
      >
        <Icon>{showPassword ? "visibility_off" : "visibility"}</Icon>
      </button>

      <div className="border"></div>
    </div>
  );
};

export default PasswordControl;
