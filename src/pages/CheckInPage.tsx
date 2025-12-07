import { useState } from "react";
import Button from "../components/Button";

// ⭐ ADD THESE TWO IMPORTS EXACTLY HERE:
import FindClient from "./FindClient";
import NewClientRegistration from "./NewClientRegistration";

export default function CheckInPage() {
  const [mode, setMode] = useState<"start" | "find" | "new">("start");

  if (mode === "start") {
    return (
      <div className="p-8 max-w-lg mx-auto text-center">
        <h1 className="text-3xl font-bold mb-6">Client Check-In</h1>

        <p className="text-gray-700 mb-6">
          Welcome! Choose an option to continue.
        </p>

        <div className="space-y-4">
          <Button onClick={() => setMode("find")} type="button">
            🔍 Find My Profile
          </Button>

          <Button onClick={() => setMode("new")} type="button">
            ✨ I'm New Here
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div>
      {mode === "find" && <FindClient />}
      {mode === "new" && <NewClientRegistration />}
    </div>
  );
}
