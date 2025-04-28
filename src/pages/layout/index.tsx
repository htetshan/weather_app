import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AppProvider, type Navigation } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import { useRouter } from "next/router";
import DashboardIcon from "@mui/icons-material/Dashboard";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import AboutApp from "../about";
import SettingApp from "../setting";

type DemoProps = {
  demoProp: string;
  children?: React.ReactNode;
};
const NAVIGATION: Navigation = [
  {
    segment: "about",
    title: "About",
    icon: <DashboardIcon />,
  },
  {
    segment: "setting",
    title: "Setting",
    icon: <ShoppingCartIcon />,
  },
];

function DemoPageContent() {
  const nextRouter = useRouter();

  const router = React.useMemo(
    () => ({
      pathname: nextRouter.pathname,
      query: nextRouter.query,
      push: nextRouter.push,
      replace: nextRouter.replace,
      back: nextRouter.back,
    }),
    [nextRouter]
  );
  const { pathname } = router;

  const pageComponents: { [key: string]: React.ReactNode } = {
    "/about": <AboutApp />,
    "/setting": <SettingApp />,
  };

  return (
    <Box
      sx={{
        py: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      {/* Render the associated component or a fallback message */}
      {pageComponents[pathname] || (
        <Typography>Dashboard content for {pathname}</Typography>
      )}
    </Box>
  );
}

export default function DashboardLayoutBranding(props: DemoProps) {
  const nextRouter = useRouter();

  const router = React.useMemo(
    () => ({
      pathname: nextRouter.pathname,
      query: nextRouter.query,
      push: nextRouter.push,
      replace: nextRouter.replace,
      back: nextRouter.back,
      searchParams: new URLSearchParams(nextRouter.asPath.split("?")[1] || ""),
      navigate: (url: string | URL) => nextRouter.push(url.toString()),
    }),
    [nextRouter]
  );

  return (
    <AppProvider
      navigation={NAVIGATION}
      branding={{
        logo: <img src="https://mui.com/static/logo.png" alt="MUI logo" />,
        title: "MUI",
        homeUrl: "/toolpad/core/introduction",
      }}
      router={router}
    >
      <DashboardLayout>
        <DemoPageContent />
      </DashboardLayout>
    </AppProvider>
  );
}
