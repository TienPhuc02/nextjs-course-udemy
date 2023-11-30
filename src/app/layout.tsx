import ThemeRegistry from "@/components/theme-registry/theme.registry";
import "../styles/globals.css";
import AppBarHeader from "@/components/homepage/header/index.header";
import FooterHomePage from "@/components/homepage/footer/index.footer";
export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <ThemeRegistry>
          <AppBarHeader />
          {children}
          <FooterHomePage />
        </ThemeRegistry>
      </body>
    </html>
  );
}

//ThemeRegistry là để cấu hình MUI với next làm sao cho hiệu quả
