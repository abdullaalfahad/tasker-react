export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-6 md:py-8">
      <div className="container mx-auto">
        <p className="text-center text-xs text-[#6A6A6A] lg:text-sm">
          Copyright ©{currentYear} | All rights reserved by Abdulla Al Fahad
        </p>
      </div>
    </footer>
  );
}
