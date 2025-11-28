import Style from "./notfound.module.css";

export default function NotFound() {
  return (
    <div className={Style.notFound}>
      <div className={Style.notFoundContent}>
        <h1>404</h1>
        <h5>We’re sorry, the page you were looking for cannot be found.</h5>
      </div>
    </div>
  );
}
