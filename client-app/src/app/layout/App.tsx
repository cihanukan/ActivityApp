import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDasboard from "../../features/activies/dashboard/ActivityDasboard";
import { observer } from "mobx-react-lite";
import { Route, Switch, useLocation } from "react-router";
import ActivityForm from "../../features/activies/form/ActivityForm";
import HomePage from "../../features/home/HomePage";
import ActivityDetails from "../../features/activies/details/ActivityDetails";
import TestErrors from "../../features/errors/TestError";
import { ToastContainer } from "react-toastify";
import NotFound from "../../features/errors/NotFound";
import ServerError from "../../features/errors/ServerError";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <ToastContainer position="bottom-right" hideProgressBar />
      <Route path="/" exact component={HomePage} />
      <Route
        path={`/(.+)`}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Switch>
                <Route path="/activities" exact component={ActivityDasboard} />
                <Route path="/activities/:id" component={ActivityDetails} />
                <Route
                  key={location.key}
                  path={["/createActivity", "/manage/:id"]}
                  component={ActivityForm}
                />
                <Route path="/errors" component={TestErrors} />
                <Route path="/server-error" component={ServerError} />
                <Route component={NotFound} />
              </Switch>
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default observer(App);
