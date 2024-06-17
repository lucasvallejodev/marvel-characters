import { useRouteError } from "react-router-dom";
import { Typography } from "../../components";

export default function ErrorPage() {
  const error = useRouteError();
  const errorMessage = (error as Error)?.message || (error as { statusText?: string })?.statusText;

  return (
    <div id="error-page">
      <Typography type="h1">Oops!</Typography>
      <Typography>Sorry, an unexpected error has occurred.</Typography>
      <Typography>
        <i>{errorMessage}</i>
      </Typography>
    </div>
  );
}