import * as React from "react";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import { AppProvider } from "@toolpad/core/AppProvider";
import { DashboardLayout } from "@toolpad/core/DashboardLayout";
import DescriptionIcon from "@mui/icons-material/Description";
import { useRouter } from "next/router";
import Link from "next/link";

interface LayoutProps {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutProps) {
  /*
  interface Router {
    pathname: string;
    searchParams?: URLSearchParams;
    navigate?: Navigate;
    Link: React.ComponentType<LinkProps>;  'next/link က Link နဲ routing ရ ပြီ'
     }

  router?: Router;

}

*/

  const nextRouter = useRouter();

  return (
    <AppProvider
      navigation={[
        { segment: "/", title: "Home", icon: <DescriptionIcon /> },
        { segment: "/about", title: "About Us", icon: <DescriptionIcon /> },
        { segment: "/setting", title: "Setting", icon: <DescriptionIcon /> },
      ]}
      router={{ pathname: nextRouter.pathname, Link }}
    >
      <DashboardLayout>
        <Box sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          {/* Render the actual page */}
          <Box>{children}</Box>
        </Box>
      </DashboardLayout>
    </AppProvider>
  );
}
