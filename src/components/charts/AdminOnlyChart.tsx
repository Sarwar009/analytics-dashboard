export default function AdminOnlyChart() {
  return (
    <div className="bg-white p-6 rounded-xl shadow-md">
      <h3 className="font-semibold">
        Admin Revenue Breakdown
      </h3>
      <p className="text-gray-500 mt-2">
        Visible only to admin role
      </p>
    </div>
  );
}
