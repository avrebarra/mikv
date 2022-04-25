import * as React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazily } from "react-lazily";

import { extendTheme } from "@chakra-ui/react";
import { ChakraProvider } from "@chakra-ui/react";
import { Footer } from "./components/BlockFooter";

import config from "./config";

const { Home } = lazily(() => import("./components/ScreenHome"));
const { Dashboard } = lazily(() => import("./components/ScreenDashboard"));
const { DashboardEditKV: EditKV } = lazily(
  () => import("./components/ScreenDashboard.EditKV")
);
const { NotFound404 } = lazily(() => import("./components/Screen404"));

const ChakraThemeExtended = extendTheme({
  config: {
    initialColorMode: "light",
  },
  components: {
    Button: {
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
    },
  },
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "#1a202c",
    },
  },
});

export function App() {
  // context, vars, and states
  const [readiness, setReadiness] = React.useState<boolean>(false);

  // helper funcs
  const funcLoadData = async () => {};
  const funcRenderLoader = () => <p>Loading...</p>;

  // effects
  React.useEffect(() => {
    funcLoadData();
  }, [readiness]);

  return (
    <ChakraProvider theme={ChakraThemeExtended}>
      <div className="appwrapper flex justify-center items-center h-screen w-screen ">
        <div className="app w-full max-w-lg h-full xs:max-h-144">
          <div className="content p-10 py-16">
            <BrowserRouter basename={config.appBasePath}>
              <React.Suspense fallback={funcRenderLoader()}>
                <Routes>
                  <Route path="/" element={<Home />} />
                  <Route path="/dashboard" element={<Dashboard />} />
                  <Route path="*" element={<NotFound404 />} />
                </Routes>
              </React.Suspense>
            </BrowserRouter>
            <br />
            <Footer />
          </div>
        </div>
      </div>
    </ChakraProvider>
  );
}
