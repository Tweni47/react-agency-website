import Achievements from "./components/Achievements";
import Calender from "./components/Calender";
import Client from "./components/Client";
import Community from "./components/Community";
import Customer from "./components/Customer";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Unlock from "./components/Unlock";
import Updates from "./components/Updates";

export default function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Client />
      <Community />
      <Unlock />
      <Achievements />
      <Calender />
      <Customer />
      <Updates />
      <Footer />
    </>
  );
}
