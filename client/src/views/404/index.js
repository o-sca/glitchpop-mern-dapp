import BG from "../../assets/images/banner.svg";

const Page404 = ({ location }) => {
  return (
    <div className="page404" style={{
      backgroundImage: BG,
      backgroundSize: "cover",
      textAlign: "center",
      padding: "50px 0",
    }}>
      <h2>Oopsies! This page does not exist! <code>{location.pathname}</code></h2>
      <br />
      <a href="/">Go Back</a>
    </div>
  );
}
 
export default Page404;