import Button from "../components/Button";

export default function CheckInPage() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold mb-4">Client Check-In</h1>
      <p className="text-gray-700 mb-6">
        This page will handle the check-in process.
      </p>

      <Button type="button">
        Start Check-In
      </Button>
    </div>
  );
}
