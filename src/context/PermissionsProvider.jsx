import { createContext, useEffect, useState } from "react";
import axiosClient from "../config/axiosClient";

const PermissionsContext = createContext();

const PermissionsProvider = ({ children }) => {
  const [permissions, setPermissions] = useState([]);
  const [alert, setAlert] = useState({});

  useEffect(() => {
    const getPermissions = async () => {
      try {
        const { data } = await axiosClient("/permissions");
        setPermissions(data);
      } catch (error) {
        console.log(error);
      }
    };
    getPermissions();
  }, []);

  const showAlert = (alert) => {
    setAlert(alert);

    setTimeout(() => {
      setAlert({});
    }, 5000);
  };

  const editPermission = async (permission) => {
    try {
      const { data } = await axiosClient.put(
        `/permission/${permission.Permission.id}`,
        permission
      );
      setPermissions(
        permissions.map((permission) =>
          permission.id === data.permission.id ? data.permission : permission
        )
      );

      setAlert({
        msg: data.message,
        error: false,
      });

      setTimeout(() => {
        setAlert({});
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const newPermission = async (permission) => {
    try {
      const { data } = await axiosClient.post("/permission", permission);
      setPermissions([...permissions, data.permission]);

      setAlert({
        msg: data.message,
        error: false,
      });

      setTimeout(() => {
        setAlert({});
      }, 3000);
    } catch (error) {
      console.log(error);
    }
  };

  const submitCompany = async (permission) => {
    if (permission.Permission.id) {
      await editPermission(permission);
    } else {
      await newPermission(permission);
    }
  };
  return (
    <PermissionsContext.Provider
      value={{
        permissions,
        submitCompany,
        alert,
        showAlert,
      }}
    >
      {children}
    </PermissionsContext.Provider>
  );
};

export { PermissionsProvider };

export default PermissionsContext;
