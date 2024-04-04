import { useAuth } from "../../contexts/AuthContext";

const AdminPage = () => {
  const { role } = useAuth();

  if (role != "SUPER_ADMIN") {
    return (
      <>
      <br />
        <div className="alert alert-warning" role="alert">
          You are not a super admin!!
        </div>
      </>
    );
  } else {
    return(
        <>
        <h1>Admin Page</h1>
        </>
    )
  }
};

export default AdminPage;
