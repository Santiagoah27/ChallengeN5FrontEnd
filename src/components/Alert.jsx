const Alert = ({ alert }) => {
  const backgroundGradient = alert.error ? "#cb1a1a" : "#1886b1";

  return (
    <div
      style={{
        marginTop: 15,
        background: backgroundGradient,
        textAlign: "center",
        padding: "12px",
        borderRadius: "12px",
        textTransform: "uppercase",
        color: "white",
        fontWeight: "700",
      }}
    >
      {alert.msg}
    </div>
  );
};

export default Alert;
