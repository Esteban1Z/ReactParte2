const Notification = ({ sign, context }) => {
  if (!sign || !context) return null;

  return (
    <div className={sign}>
      {context}
    </div>
  );
};

export default Notification;
