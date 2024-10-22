import type { Metadata } from "next";
import Navbar from "@/app/components/navbar"
import localfont from "next/font/local"
import "./theme/styles/globals.css";

const gtwalsheimpro = localfont({
 variable:  '--font-gtwlsheimpro',
  src: [
    {
      path: './theme/fonts/GTWalsheimPro-Black.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-BlackOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-Bold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-BoldOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedBlack.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedBlackOblique.woff2',
      weight: '400',
      style: 'normal',
      
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedBold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedBoldOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedLight.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedLightOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedMedium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedMediumOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedRegular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedRegularOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedThin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedThinOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedUltraBold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedUltraBoldOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedUltraLight.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-CondensedUltraLightOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-Light.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-LightOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-Medium.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-MediumOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-Regular.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-RegularOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-Thin.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-ThinOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-UltraBold.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-UltraBoldOblique.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-UltraLight.woff2',
      weight: '400',
      style: 'normal',
    },
    {
      path: './theme/fonts/GTWalsheimPro-UltraLightOblique.woff2',
      weight: '400',
      style: 'normal',
    },
  ]
})

export const metadata: Metadata = {
  title: "Online classNamees for Creatives | Skiills - Paandaaa",
  description: "Skiills by Paandaaa offers high-quality online courses designed by expert educators, empowering students with practical knowledge and skills for personal and professional growth.",
  keywords: "learn, learning, className, classNamees, teach, education, how to, online learning, collaborative learning"
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
     
      <body className={gtwalsheimpro.variable}>
              <Navbar />
              {children}
        </body>
    </html>
  );
}
