// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import StudentsFeedback from "./students-feedback";
import { RetortTypes } from "./retort-types";
import { RetortFeatures } from "./RetortFeatures";
import { FeatureCards } from "./FeatureCards";
import ContactUs from "./ContactUs";
import { Blogs } from "@/components/blogs";
export default function Campaign() {
  return (
    <>
      <Hero />
      <RetortTypes />
      <RetortFeatures />
      {/* <OutImpressiveStats /> */}
      <FeatureCards />
      <Blogs />
      {/* <ExploreCourses /> */}
      {/* <Testimonial /> */}
      {/* <Events /> */}
      {/* <StudentsFeedback /> */}
      {/* <TrustedCompany /> */}
      <ContactUs />
      <Footer />
    </>
  );
}
