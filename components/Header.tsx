import AdminPotion from "./AdminPotion";
import Container from "./Container";
import MobileMenu from "./MobileMenu";
import MyLogo from "./MyLogo";
import Navbar from "./Navbar";

export default function Header() {
  return (
    <header
      className="py-5 border-b border-border top-0 z-50 sticky backdrop-blur-lg bg-background/70"
    >
      <Container
        className="flex items-center justify-between text-foreground/80"
      >
        {/* logo */}
        <div className="flex items-center gap-3">
          <MobileMenu />
          <MyLogo />
        </div>

        {/* nav  */}
        <Navbar />

        {/* admin */}
        <AdminPotion />
      </Container>
    </header>
  )
}
