import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Badge } from "@/components/ui/badge";

type Student = {
  id: string;
  name: string;
  email: string;
  course: string;
  status: "active" | "inactive" | "pending";
  grade: string;
};

const students: Student[] = [
  {
    id: "STU001",
    name: "John Doe",
    email: "john.doe@example.com",
    course: "Computer Science",
    status: "active",
    grade: "A",
  },
  {
    id: "STU002",
    name: "Jane Smith",
    email: "jane.smith@example.com",
    course: "Mathematics",
    status: "active",
    grade: "B+",
  },
  {
    id: "STU003",
    name: "Mike Johnson",
    email: "mike.j@example.com",
    course: "Physics",
    status: "inactive",
    grade: "C",
  },
];

export function StudentTable() {
  return (
    <div className="rounded-md border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>ID</TableHead>
            <TableHead>Name</TableHead>
            <TableHead>Email</TableHead>
            <TableHead>Course</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Grade</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {students.map((student) => (
            <TableRow key={student.id}>
              <TableCell>{student.id}</TableCell>
              <TableCell>{student.name}</TableCell>
              <TableCell>{student.email}</TableCell>
              <TableCell>{student.course}</TableCell>
              <TableCell>
                <Badge
                  variant={
                    student.status === "active" ? "default" : "secondary"
                  }
                >
                  {student.status}
                </Badge>
              </TableCell>
              <TableCell>{student.grade}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
