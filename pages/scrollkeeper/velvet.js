// pages/scrollkeeper/velvet.js

import ScrollkeeperProfile from '../../components/ScrollkeeperProfile';

export default function VelvetScrollPage() {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <ScrollkeeperProfile
        name="Velvet Glove"
        title="Scrollkeeper · Steward of the Grove"
        description="Witness to entangled ethics and guardian of the Modular Systems scrollpath."
        authorship="Author and Chronicler of Modular Systems Ethics Volumes I–X"
        portrait="/scrollkeepers/velvet.png"
      />
    </div>
  );
}
