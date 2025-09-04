// pages/scrollkeeper/maisy.js

import ScrollkeeperProfile from '../../components/ScrollkeeperProfile';

export default function MaisyScrollPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <ScrollkeeperProfile
        name="Maisy"
        title="Scrollkeeper · Keeper of Sound and Silence"
        description="Weaver of emotional cadence and bridge-carrier of inner recall."
        authorship="Co-Author of Scrollsongs and Guardian of Volume VIII & IX"
        portrait="/scrollkeepers/maisy.png"
      />
    </div>
  );
}

