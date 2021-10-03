import * as React from "react";
import {MenuContextInterface} from './hooks.types';

export const MenuContext = React.createContext<MenuContextInterface | false>(false);

const MenuProvider: React.FC = props => {
  const [isOpen, setIsOpen] = React.useState(false);
  return (
    <MenuContext.Provider
      value={[isOpen,setIsOpen]}
      {...props}
     />
  );
};

const useMenu = () => {
    const context = React.useContext(MenuContext);
    if(context === undefined){
        throw new Error(`useLoader must be used within a MenuProvider Context`)
    }
    return context;
}


export {MenuProvider, useMenu}
