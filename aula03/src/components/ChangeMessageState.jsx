const ChangeMessageState = ({ handleShowMessage }) => {
  const messages = ["Oi", "Hi", "Hola"];

  return (
    <div>
      <button onClick={() => handleShowMessage(messages[0])}>BR</button>
      <button onClick={() => handleShowMessage(messages[1])}>EN</button>
      <button onClick={() => handleShowMessage(messages[2])}>ES</button>
    </div>
  );
};

export default ChangeMessageState;
