//HOC is similar to higher order function on component basis. HOCs are designed to create a ground for components that share a common behavior. Instead of rewriting 
//the same logic in every component that requires this functionality, HOCs can be written and this common set of functionalities can be placed there. This way any component
//that wants to access this feature can wrap iteself to this shared component. HOCs do not mutate the original component, it instead adds some shared behavior the 
//component and returns a new component.

//Use cases
// Protect private routes from unauthenticated users.

import { useContext } from "react";
import { Context } from "./store/context";

const withWrapper = (Component) => {
  return function (props) {
    const ctx = useContext(Context);

    if (ctx.isSignedIn) {
      return <Component {...props} />;
    } else {
      return <h1>Sign in to view this message</h1>;
    }
  };
};

export default withWrapper;
//The state can either be consumed from a single source of truth or can be consued via props.


const HOCWrappedSecret = withWrapper(Secret);
//Other use cases include:
