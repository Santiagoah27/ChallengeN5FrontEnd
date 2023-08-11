import { useContext } from "react";
import PermissionsContext from "../context/PermissionsProvider";

const usePermissions = () => {
  return useContext(PermissionsContext);
};

export default usePermissions;
