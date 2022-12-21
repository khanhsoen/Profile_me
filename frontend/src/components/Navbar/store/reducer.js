import { SET_ACTIVE, SET_UNACTIVE } from "./actions";

const initState = false;

//reduce
const reducer = (state, action) => {
   switch (action) {
      case SET_ACTIVE:
         return (state = true);
      case SET_UNACTIVE:
         return (state = false);
      default:
         throw new Error("Invalid action");
   }
};

export { initState };
export default reducer;
