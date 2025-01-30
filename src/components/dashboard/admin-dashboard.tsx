import { StatsCards } from "./stats-cards";
import { StudentTable } from "./student-table";

export default function AdminDashboard() {
  return (
    <div className="flex-1 space-y-4 p-4 md:p-8 pt-6">
      <div className="flex items-center justify-between space-y-2">
        <h2 className="text-3xl font-bold tracking-tight">Student Dashboard</h2>
      </div>
      <StatsCards />
      <div className="mt-8">
        <h3 className="text-xl font-semibold mb-4">Student Records</h3>
        <StudentTable />
      </div>
    </div>
  );
}
