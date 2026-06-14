import { Switch, Route, Router as WouterRouter } from "wouter";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";

import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { FloatingSidebar } from "@/components/layout/FloatingSidebar";

import { Home } from "@/pages/Home";
import { Contact } from "@/pages/Contact";
import { IndustryPage } from "@/pages/IndustryPage";
import { Products } from "@/pages/Products";
import { TechnicalResources } from "@/pages/TechnicalResources";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/contact" component={Contact} />
      <Route path="/products" component={Products} />
      <Route path="/industries/:slug" component={IndustryPage} />
      <Route path="/technical-resources" component={TechnicalResources} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <WouterRouter base={import.meta.env.BASE_URL.replace(/\/$/, "")}>
          <div className="flex flex-col min-h-screen w-full bg-white">
            <Navbar />
            <main className="flex-1 w-full flex flex-col">
              <Router />
            </main>
            <Footer />
            <FloatingSidebar />
          </div>
        </WouterRouter>
        <Toaster />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
