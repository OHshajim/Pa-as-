import Balance from "../../Components/Home/Balance";
import Footer from "../../Components/Home/Footer";
import Nav from "../../Components/Home/Nav";
// import Service from "../../Components/Home/Service";

const AgentDashBoard = () => {
  return (
    <div className="relative select-none">
      <div className="z-50">
        <div className="mx-14">
          <Nav />
          <Balance />
        </div>
        {/* <Service /> */}
        <Footer />
      </div>
      <div className="absolute bg-green-900 w-screen h-[35vh] top-0 -z-50 banner"></div>
    </div>
  );
};

export default AgentDashBoard;
