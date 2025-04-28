import React from "react";
import DashboardLayoutBranding from "./layout";

function SettingApp() {
  return <div>Setting Page Content</div>;
}

SettingApp.getLayout = function getLayout(page: React.ReactNode) {
  return (
    <DashboardLayoutBranding demoProp="defaultValue">
      {page}
    </DashboardLayoutBranding>
  );
};

export default SettingApp;
