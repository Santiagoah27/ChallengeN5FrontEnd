import usePermissions from "../hooks/usePermissions";
import Alert from "./Alert";
import { DataGrid } from "@material-ui/data-grid";
import {
  Button,
  Box,
  TextField,
  Select,
  MenuItem,
  InputLabel,
  FormControl,
} from "@material-ui/core";
import { format } from "date-fns";
import { useState } from "react";
import _ from "lodash";

const FormPermissions = () => {
  const { permissions, submitCompany, alert, showAlert } = usePermissions();
  const [editing, setEditing] = useState(false);
  const [currentPermission, setCurrentPermission] = useState({
    id: 0,
    typeId: 1,
    employeeName: "",
    employeeLastName: "",
    permissionType: "",
    permissionDate: new Date().toISOString(),
  });

  const handleEdit = (id) => {
    debugger;
    const permission = _.find(permissions, { id: id });
    setCurrentPermission(permission);
    setEditing(true);
  };

  const handleCancel = () => {
    setCurrentPermission({
      id: 0,
      typeId: 1,
      employeeName: "",
      employeeLastName: "",
      permissionType: "",
      permissionDate: new Date().toISOString(),
    });
    setEditing(false);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (
      [
        currentPermission.employeeName,
        currentPermission.employeeLastName,
        currentPermission.permissionType,
      ].includes("")
    ) {
      showAlert({
        msg: "Todos los campos son obligatorios",
        error: true,
      });
      return;
    }

    const payload = {
      Permission: currentPermission,
    };

    debugger;

    await submitCompany(payload);
    handleCancel();
  };

  const rows = permissions.map((permission) => ({
    id: permission.id,
    employeeName: permission.employeeName,
    employeeLastName: permission.employeeLastName,
    permissionType: permission.permissionType,
    date: permission.permissionDate,
  }));

  const columns = [
    { field: "employeeName", headerName: "Nombre del empleado", flex: 1 },
    { field: "employeeLastName", headerName: "Apellido del empleado", flex: 1 },
    { field: "permissionType", headerName: "Tipo de Permiso", flex: 1 },
    {
      field: "date",
      headerName: "Fecha",
      flex: 1,
      renderCell: (params) => format(new Date(params.value), "dd/MM/yyyy"),
    },
    {
      field: "action",
      headerName: "Acción",
      sortable: false,
      flex: 1,
      renderCell: (params) => (
        <Button
          variant="contained"
          color="primary"
          size="small"
          style={{ marginLeft: 16 }}
          onClick={() => handleEdit(params.row.id)}
        >
          Editar
        </Button>
      ),
    },
  ];

  const { msg } = alert;
  return (
    <>
      <div>
        <Box component="form" sx={{ mt: 1 }} onSubmit={handleSubmit}>
          <TextField
            label={!editing ? "Nombre Empleado" : ""}
            placeholder={!editing ? "Nombre Empleado" : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentPermission.employeeName}
            onChange={(e) =>
              setCurrentPermission({
                ...currentPermission,
                employeeName: e.target.value,
              })
            }
          />
          <TextField
            label={!editing ? "Apellido Empleado" : ""}
            placeholder={!editing ? "Apellido Empleado" : ""}
            variant="outlined"
            fullWidth
            margin="normal"
            value={currentPermission.employeeLastName}
            onChange={(e) =>
              setCurrentPermission({
                ...currentPermission,
                employeeLastName: e.target.value,
              })
            }
          />
          <FormControl fullWidth variant="outlined" margin="normal">
            <InputLabel>Tipo de Permiso</InputLabel>
            <Select
              label="Tipo de Permiso"
              value={currentPermission.permissionType}
              onChange={(e) =>
                setCurrentPermission({
                  ...currentPermission,
                  permissionType: e.target.value,
                })
              }
            >
               {!editing && <MenuItem value="" disabled>Seleccione</MenuItem>}
              <MenuItem value={1}>Admin</MenuItem>
              <MenuItem value={2}>Empleado</MenuItem>
            </Select>
          </FormControl>

          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            {editing ? "Editar Permiso" : "Crear Permiso"}
          </Button>
          {editing && (
            <Button
              type="button"
              variant="contained"
              color="secondary"
              fullWidth
              sx={{ mt: 3, mb: 2 }}
              onClick={handleCancel}
            >
              Cancelar
            </Button>
          )}
        </Box>
      </div>

      {msg && <Alert alert={alert} />}

      <div
        style={{
          height: 400,
          paddingLeft: 73,
          marginLeft: -406,
          marginRight: -406,
          marginTop: 25,
        }}
      >
        <DataGrid rows={rows} columns={columns} pageSize={5} />
      </div>
    </>
  );
};

export default FormPermissions;
