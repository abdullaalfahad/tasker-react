export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer class="py-6 md:py-8">
      <div class="container mx-auto">
        <p class="text-center text-xs text-[#6A6A6A] lg:text-sm">
          Copyright ©{currentYear} | All rights reserved by Abdulla Al Fahad
        </p>
      </div>
    </footer>
  );
}
