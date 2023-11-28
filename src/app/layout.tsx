import ThemeRegistry from "@/components/theme-registry/theme.registry";
import "../styles/globals.css";
import AppBarHeader from "@/components/theme-registry/homepage/header/index.header";
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
        </ThemeRegistry>
      </body>
    </html>
  );
}

//ThemeRegistry là để cấu hình MUI với next làm sao cho hiệu quả
