import { Button } from "@mui/material";
import "/src/index.css"
export default function UsersTable({ users }) {
  const exportToCSV = () => {
    const csvRows = [];
    const headers = ["CODE", "User Name", "Email", "Phone"];
    csvRows.push(headers.join(","));

    users.forEach(user => {
      const values = [user.code, user.userName, user.email, user.phone];
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
        {/* Buttons Row */}
        <div className="flex justify-between items-center mb-3 w-full">
          
          {/* Left side buttons */}
          <div className="flex gap-3">
            <Button variant="outlined" onClick={exportToCSV}>Export CSV</Button>
            <Button variant="outlined" onClick={printTable}>Print</Button>
          </div>

          {/* Right side button */}
          <button
            type="button"
            id="openmodal"
            data-toggle="modal"
            data-target="#data_Model"
            className="btn btn-light font-weight-bolder flex items-center gap-2"
          >
            <i className="fa fa-plus-circle"></i>
            NEW REQUEST
          </button>
        </div>


      <table className="table" id="users-table" border="1" width="100%" cellPadding={8}>
        <thead>
          <tr>
            <th>S.NO</th><th>Code</th><th>UserName</th><th>Email</th><th>Phone</th><th>Active</th><th>Action</th>
          </tr>
        </thead>
        <tbody>
          {users.length > 0 ? (
            users.map((u, index) => (
              <tr key={u.id}>
                <td>{index + 1}</td> {/* ✅ S.NO auto increment */}
                <td>{u.code}</td>
                <td>{u.userName}</td>
                <td>{u.email}</td>
                <td>{u.phone}</td>
                <td>{u.active ? "✔️" : "❌"}</td>
                <td></td>
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
