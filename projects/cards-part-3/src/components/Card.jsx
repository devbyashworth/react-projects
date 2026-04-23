export const Card = ({ name, role, img, bio, socials = [], onSocialClick }) => (
  <div className="card">
    <img src={img} alt={name} />
    <div className="content">
      <h2>{name}</h2>
      <h3>{role}</h3>
      <p>{bio}</p>
      <div className="socials">
        {socials.map((social) => (
          <button
            type="button"
            key={social}
            onClick={() => onSocialClick?.(social)}
          >
            <i className={`fa-brands fa-${social}`}></i>
          </button>
        ))}
      </div>
    </div>
  </div>
);
