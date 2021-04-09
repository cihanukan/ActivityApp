import { observer } from "mobx-react-lite";
import React, { useEffect } from "react";
import { Grid } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";
import ActivityFilters from "./ActivityFilters";
import ActivityList from "./ActivityList";

function ActivityDasboard() {
  const { activityStore } = useStore();
  const { activitiesByDate, activityRegistry, loadActivities } = activityStore;

  useEffect(() => {
    if (activityRegistry.size <= 1) loadActivities();
  }, [activityRegistry.size, loadActivities]);

  if (activityStore.loadingInitial)
    return <LoadingComponent content={"Loading Activities"} />;

  return (
    <Grid>
      <Grid.Column width="10">
        {activitiesByDate.length > 0 ? (
          <ActivityList />
        ) : (
          <p style={{ fontSize: "20px" }}>No Activity Found</p>
        )}
      </Grid.Column>
      <Grid.Column width="6" style={{ marginTop: "2em" }}>
        <ActivityFilters />
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDasboard);
