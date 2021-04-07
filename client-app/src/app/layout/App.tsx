import React, { Fragment } from "react";
import { Container } from "semantic-ui-react";
import NavBar from "./NavBar";
import ActivityDasboard from "../../features/activies/dashboard/ActivityDasboard";
import { observer } from "mobx-react-lite";
import { Route, useLocation } from "react-router";
import ActivityForm from "../../features/activies/form/ActivityForm";
import HomePage from "../../features/home/HomePage";
import ActivityDetails from "../../features/activies/details/ActivityDetails";

function App() {
  const location = useLocation();
  return (
    <Fragment>
      <Route path="/" exact component={HomePage} />
      <Route
        path={`/(.+)`}
        render={() => (
          <>
            <NavBar />
            <Container style={{ marginTop: "7em" }}>
              <Route path="/activities" exact component={ActivityDasboard} />
              <Route path="/activities/:id" component={ActivityDetails} />
              <Route
                key={location.key}
                path={["/createActivity", "/manage/:id"]}
                component={ActivityForm}
              />
            </Container>
          </>
        )}
      />
    </Fragment>
  );
}

export default observer(App);
