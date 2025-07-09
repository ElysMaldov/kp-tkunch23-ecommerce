import React from "react";
import "../../styles/globals.css";

export default async function RootLayout(props: { children: React.ReactNode }) {
  const { children } = props;

  return (
    <html lang="en">
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}

/* 
1. Buat form login
2. Tampilkan di /auth/login
3. Terima input email & password
4. Kalau klik tombol, console.log kedua data itu
*/
