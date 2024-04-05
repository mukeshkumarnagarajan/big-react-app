import { ChangeEvent, useState } from "react";

interface SocialMediaProps {
  name: string;
  followersCount: string;
}

const SocialMedia: React.FC<SocialMediaProps> = ({ name, followersCount }) => {
  const [countryName, setCountryName] = useState("India");

  return (
    <>
      <h2>Social Media Info</h2>
      <h3>
        Demo of Testing Props, States, Events, JSX, Styles, Snapshot testing
      </h3>

      <p>Top Social Media Platform of Genesys</p>
      <p data-testid="followersDetails" style={{backgroundColor: '#ffff00'}}>
        {name} with {followersCount} followers
      </p>

      <input
        type="text"
        placeholder="Enter Country Name"
        value={countryName}
        onChange={(event: ChangeEvent<HTMLInputElement>) => {
          setCountryName(event.target.value);
        }}
      />
      <p data-testid="webSiteInfo">Visit Genesys {countryName} Website</p>
    </>
  );
};

export default SocialMedia;
