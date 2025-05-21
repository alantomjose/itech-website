// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import OutImpressiveStats from "./out-impressive-stats";
import ExploreCourses from "./explore-courses";
import Testimonial from "./testimonial";
import Events from "./events";
import StudentsFeedback from "./students-feedback";
import TrustedCompany from "./trusted-companies";
import { RetortTypes } from "./retort-types";
import { RetortFeatures } from "./RetortFeatures";
import { FeatureCards } from "./FeatureCards";
import ContactUs from "./ContactUs";
export default function Campaign() {
  return (
    <>
      <Navbar />
      <Hero />
      <RetortTypes />
      <RetortFeatures />
      {/* <OutImpressiveStats /> */}
      <FeatureCards />
      {/* <ExploreCourses /> */}
      {/* <Testimonial /> */}
      {/* <Events /> */}
      <StudentsFeedback />
      {/* <TrustedCompany /> */}
      <ContactUs />
      <Footer />
    </>
  );
}
