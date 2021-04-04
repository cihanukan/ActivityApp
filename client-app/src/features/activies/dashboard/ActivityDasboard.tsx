import { observer } from "mobx-react-lite";
import React from "react";
import { Grid } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";
import ActivityDetails from "../details/ActivityDetails";
import ActivityForm from "../form/ActivityForm";
import ActivityList from "./ActivityList";

function ActivityDasboard() {
  const { activityStore } = useStore();
  const { selectedActivity, editMode, activitiesByDate } = activityStore;
  return (
    <Grid>
      <Grid.Column width="10">
        {activitiesByDate.length > 0 ? (
          <ActivityList />
        ) : (
          <p style={{ fontSize: "20px" }}>No Activity Found</p>
        )}
      </Grid.Column>
      <Grid.Column width="6">
        {selectedActivity && !editMode && <ActivityDetails />}
        {editMode && <ActivityForm />}
      </Grid.Column>
    </Grid>
  );
}

export default observer(ActivityDasboard);
