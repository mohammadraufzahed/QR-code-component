import classes from "../../styles/component/QRBox/index.module.scss";

const QRBox = () => {
  return (
    <div className={classes.container}>
      <figure className={classes.image}>
        <img src="/image-qr-code.png" alt="QRCode" />
      </figure>
      <h3 className={classes.title}>
        Improve your front-end skills by building projects
      </h3>
      <p className={classes.paragraph}>
        Scan the QR code to visit Frontend Mentor and take your coding skills to
        the next level
      </p>
    </div>
  );
};

export default QRBox;
