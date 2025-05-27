import React from "react";
import Card from "./Card";
import image from "./image.jpg";

const App = () => {
  const handleProfile = () => {
    return <a href="http://devbyashworth.vercel.app/"></a>;
  };
  const handleFollow = () => {};

  return (
    <section>
      <Card
        image={image}
        title="Ashworth"
        subtitle="Frontend Developer"
        description="Ashworth specializes in building responsive and accessible user interfaces using React and Tailwind CSS."
        onProfile={handleProfile}
        onFollow={handleFollow}
      />
    </section>
  );
};

export default App;
