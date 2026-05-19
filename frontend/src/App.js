import { useState } from "react";
import "@/App.css";
import Header from "./components/site/Header";
import Hero from "./components/site/Hero";
import Services from "./components/site/Services";
import FidelityCalculator from "./components/site/FidelityCalculator";
import Team from "./components/site/Team";
import Awards from "./components/site/Awards";
import Reviews from "./components/site/Reviews";
import Contact from "./components/site/Contact";
import Footer from "./components/site/Footer";
import SubmitDealModal from "./components/site/SubmitDealModal";
import LeaveReviewModal from "./components/site/LeaveReviewModal";
import BookMeetingModal from "./components/site/BookMeetingModal";

function App() {
  const [dealOpen, setDealOpen] = useState(false);
  const [reviewOpen, setReviewOpen] = useState(false);
  const [meetingOpen, setMeetingOpen] = useState(false);

  const openDeal = () => setDealOpen(true);
  const openReview = () => setReviewOpen(true);
  const openMeeting = () => setMeetingOpen(true);

  return (
    <div className="App font-sans bg-white text-[#131e3d]" data-testid="app-root">
      {/* <Header onSubmitDealClick={openDeal} /> */}
      <main>
        {/* <Hero onSubmitDealClick={openDeal} /> */}
        {/* <Services /> */}
        <FidelityCalculator />
        {/* <Team /> */}
        {/* <Awards /> */}
        {/* <Reviews onLeaveReviewClick={openReview} /> */}
        {/* <Contact onSubmitDealClick={openDeal} onBookMeetingClick={openMeeting} /> */}
      </main>
      {/* <Footer /> */}

      {/* <SubmitDealModal open={dealOpen} onOpenChange={setDealOpen} /> */}
      {/* <LeaveReviewModal open={reviewOpen} onOpenChange={setReviewOpen} /> */}
      {/* <BookMeetingModal open={meetingOpen} onOpenChange={setMeetingOpen} /> */}
    </div>
  );
}

export default App;
