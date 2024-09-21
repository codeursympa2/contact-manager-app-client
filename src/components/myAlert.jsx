import Alert from "react-bootstrap/Alert";

export function MyAlert({ type, header, message, dismissible }) {
  if (dismissible) {
    return (
      <Alert variant={type} onClose={() => false} dismissible>
        <Alert.Heading>{header}</Alert.Heading>
        <p>{message}</p>
      </Alert>
    );
  }

  return (
    <Alert variant={type} onClose={() => false}>
      <Alert.Heading>{header}</Alert.Heading>
      <p>{message}</p>
    </Alert>
  );
}
