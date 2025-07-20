import { AaFetchapi } from "./components/AaFetchapi";
import { About } from "./components/contextApi/About";
import { Home } from "./components/contextApi/Home";
import { BioProvider } from "./components/contextApi/Index";
import { DerivedState } from "./components/DerivedState";
import EventHandling from "./components/EventHandling";
import { EventPropo } from "./components/EventPropo";
import EventProps from "./components/EventProps";
import { FetchApi } from "./components/FetchApi";
import { ForwardRef } from "./components/ForwardRef";
import { EffectComponent } from "./components/hooks/EffectComponent";
import { State } from "./components/hooks/State";
import LiftStateup from "./components/LiftStateup";
import { ParentComponent } from "./components/PropDrilling";
import { RegistrationForm } from "./components/RegistrationForm";
import ToggleSwitch from "./components/ToggleSwitch";
import { UseRefLarn } from "./components/UseReffLarn";

function App() {
  return (
    <>
      <h1 className="text-center text-slate-700 text-3xl">Used Tailwind Css</h1>
      {/* <FetchApi /> */}
      <AaFetchapi />
      <EventHandling />
      <EventProps />
      <EventPropo />
      <State />
      <DerivedState />
      <LiftStateup />
      <ToggleSwitch />
      <RegistrationForm />
      <EffectComponent />
      <UseRefLarn />
      <ForwardRef />
      <ParentComponent />
      <BioProvider>
        <Home />
        <About />
      </BioProvider>
    </>
  );
}

export default App;
