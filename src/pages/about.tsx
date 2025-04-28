import React from "react";
import DashboardLayoutBranding from "./layout";

function AboutApp() {
  return <div>About Page Content</div>;
}

AboutApp.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <DashboardLayoutBranding demoProp="someValue">
      {page}
    </DashboardLayoutBranding>
  );
};

export default AboutApp;
