import AnnouncementBar from "@/components/public/AnnouncementBar";
import Footer from "@/components/public/Footer";
import Header from "@/components/public/Header";

export default function PublicLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen">
      <AnnouncementBar />
      <Header />
      {children}
      <Footer />
    </div>
  );
}
