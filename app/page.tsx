"use client";
import { useState } from "react";
import Header from "./components/Header";
import HeroCarousel from "./components/HeroCarousel";
import VideoSection from "./components/VideoSection";
import PopularTrips from "./components/PopularTrips";
import ServicesSection from "./components/ServicesSection";
import GolfPlacesSlider from "./components/GolfPlacesSlider";
import PopularGolfPackages from "./components/PopularGolfPackages";
import ContactForm from "./components/ContactForm";
import Footer from "./components/Footer";
import { DetailModal, BookingModal } from "./components/Modals";
import { popularTrips } from "./lib/data";

export default function Home() {
  const [detailModalOpen, setDetailModalOpen] = useState(false);
  const [bookingModalOpen, setBookingModalOpen] = useState(false);
  const [currentPackage, setCurrentPackage] = useState({ title: "", duration: "", description: "" });
  const [currentTrip, setCurrentTrip] = useState<any>(null);

  const handleShowTripDetails = (tripId: string) => {
    const trip = popularTrips.find((t) => t.id === tripId);
    if (trip) {
      setCurrentTrip(trip);
      setDetailModalOpen(true);
    }
  };

  const handleShowPackageDetails = (title: string, duration: string, description: string) => {
    setCurrentPackage({ title, duration, description });
    setCurrentTrip(null);
    setDetailModalOpen(true);
  };

  const handleShowGolfPackageDetails = (title: string, duration: string, description: string) => {
    setCurrentPackage({ title, duration, description });
    setCurrentTrip(null);
    setDetailModalOpen(true);
  };

  const handleOpenBookingModal = (packageName: string) => {
    setCurrentPackage((prev) => ({ ...prev, title: packageName }));
    setBookingModalOpen(true);
  };

  const handleBookingSubmit = (data: any) => {
    const { firstName, lastName, email, phone, nationality, message, packageName } = data;
    const subject = `Booking Request: ${packageName}`;
    const body = `Name: ${firstName} ${lastName}\nEmail: ${email}\nPhone: ${phone}\nNationality: ${nationality}\nPackage: ${packageName}\n\nMessage: ${message}`;
    window.location.href = `mailto:bookings@dreamdestination.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    alert(`Thank you ${firstName}! Your booking request for "${packageName}" has been opened in your email client. We'll get back to you shortly.`);
    setBookingModalOpen(false);
  };

  const detailModalProps = currentTrip
    ? {
        title: currentTrip.title,
        duration: currentTrip.duration,
        price: currentTrip.price,
        highlights: currentTrip.highlights,
        description: currentTrip.description,
        icon: currentTrip.icon,
        onBook: () => {
          setDetailModalOpen(false);
          handleOpenBookingModal(currentTrip.title);
        },
      }
    : {
        title: currentPackage.title,
        duration: currentPackage.duration,
        description: currentPackage.description,
        icon: "fa-gift",
        onBook: () => {
          setDetailModalOpen(false);
          handleOpenBookingModal(currentPackage.title);
        },
      };

  return (
    <main className="min-h-screen flex flex-col bg-[#f0f7f0]" >
      <Header />
      <HeroCarousel />
      <VideoSection />
      <PopularTrips onShowDetails={handleShowTripDetails} onBook={handleOpenBookingModal} />
      <ServicesSection onShowPackageDetails={handleShowPackageDetails} onBook={handleOpenBookingModal} />
      <GolfPlacesSlider />
      <PopularGolfPackages onShowDetails={handleShowGolfPackageDetails} onBook={handleOpenBookingModal} />
      <ContactForm />
      <Footer />

      <DetailModal
        isOpen={detailModalOpen}
        onClose={() => setDetailModalOpen(false)}
        {...detailModalProps}
      />
      <BookingModal
        isOpen={bookingModalOpen}
        onClose={() => setBookingModalOpen(false)}
        packageName={currentPackage.title}
        onSubmit={handleBookingSubmit}
      />
    </main>
  );
}