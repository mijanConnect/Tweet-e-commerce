import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider } from "antd";
import { Lobster_Two, Poppins, Rancho } from "next/font/google";
import "slick-carousel/slick/slick-theme.css";
import "slick-carousel/slick/slick.css";
import FooterDesign from "./components/Footer";
import "./globals.css";
import theme from "./theme/themeConfig";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-poppins",
  display: "swap",
});

const lobsterTwo = Lobster_Two({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-lobster-two",
  display: "swap",
});

const rancho = Rancho({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-rancho",
  display: "swap",
});

export const metadata = {
  title: "Tweet",
  description: "E-commerce",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${lobsterTwo.variable} ${rancho.variable}`}
    >
      <body>
        <ConfigProvider theme={theme}>
          <AntdRegistry>
            {children}
            <FooterDesign />
          </AntdRegistry>
        </ConfigProvider>
      </body>
    </html>
  );
}
