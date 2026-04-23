import React, { useState } from "react";
import EditableText from "./components/EditableText";
import { Card } from "./components/Card";
import bioData from "./data/bio";

const App = () => {
  // Store all editable fields in one state object
  const [profile, setProfile] = useState({
    name: bioData.name,
    role: bioData.role,
    bio: bioData.bio,
  });

  const handleFieldSave = (fieldName, value) => {
    setProfile((prev) => ({ ...prev, [fieldName]: value }));
  };

  const handleSocialClick = (platform) => alert(`Clicked ${platform}`);

  return (
    <div style={{ padding: "20px" }}>
      <Card
        name={
          <EditableText
            name="name"
            defaultValue={profile.name}
            onSave={handleFieldSave}
          />
        }
        role={
          <EditableText
            name="role"
            defaultValue={profile.role}
            onSave={handleFieldSave}
          />
        }
        img={bioData.img}
        bio={
          <EditableText
            name="bio"
            defaultValue={profile.bio}
            onSave={handleFieldSave}
          />
        }
        socials={bioData.socials}
        onSocialClick={handleSocialClick}
      />
    </div>
  );
};

export default App;
