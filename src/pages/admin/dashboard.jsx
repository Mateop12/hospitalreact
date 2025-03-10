import Menulateral from "../../components/admin/menulateral";
import Content from "../../components/admin/content";

function Dashboard() {

  return (
    <>
      <div id="page-top">
        <div id="wrapper">
          <Menulateral />
          <Content />         
        </div>
      </div>
    </>
  );
}

export default Dashboard;
