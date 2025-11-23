import { useState , useEffect , createContext, Children} from "react";

export const ContextApi = createContext(null);

const ContextProvider = (props) => {
  const [theme , setTheme] = useState(true);

  const HandleTheme = () =>{
    if(theme){
      setTheme(false);
    }
    else{
      setTheme(true);
    }
  }
 
  const ContextValue = {
    theme,HandleTheme
  };

  return (
   <ContextApi.Provider value={ContextValue}>
    {props.children}
   </ContextApi.Provider>
  )
}

export default ContextProvider
