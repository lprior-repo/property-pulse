import React from "react";

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <html lang="en">
      <body>
        <div>{children}</div>
        console.log("🚀 ~ MainLayout ~ children:", children)
      </body>
    </html>
  );
};

export default MainLayout;
