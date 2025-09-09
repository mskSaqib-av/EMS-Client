import { Button } from "@mui/material";

export default function UsersTable({ users }) {
  const exportToCSV = () => {
    const csvRows = [];
    const headers = ["CODE", "UserName", "Email", "Phone", "Date Of Birth"];
    csvRows.push(headers.join(","));

    users.forEach(user => {
      const values = [user.id, user.name, user.email, user.role];
      csvRows.push(values.join(","));
    });

    const blob = new Blob([csvRows.join("\n")], { type: "text/csv" });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "users.csv";
    a.click();
  };

  const printTable = () => {
    const printContent = document.getElementById("users-table").outerHTML;
    const win = window.open("", "", "width=900,height=700");
    win.document.write("<html><head><title>Print</title></head><body>");
    win.document.write(printContent);
    win.document.write("</body></html>");
    win.document.close();
    win.print();
  };

  return (
    <div className="mt-6">
      <div className="flex gap-3 mb-3">
        <Button variant="outlined" onClick={exportToCSV}>Export CSV</Button>
        <Button variant="outlined" onClick={printTable}>Print</Button>
      </div>

      <table id="users-table" border="1" width="100%" cellPadding={8}>
        <thead>
          <tr>
            <th>S.NO</th><th>Code</th><th>UserName</th><th>Email</th><th>Phone</th><th>Date Of Birth</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u) => (
              <tr key={u.id}>
                <td>{u.id}</td>
                <td>{u.name}</td>
                <td>{u.email}</td>
                <td>{u.role}</td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="4" align="center">No users found</td>
            </tr>
          )}
        </tbody>
      </table>
    </div>
  );
}
