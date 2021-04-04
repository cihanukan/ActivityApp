import { observer } from "mobx-react-lite";
import React from "react";
import { Button, Card, Image } from "semantic-ui-react";
import LoadingComponent from "../../../app/layout/LoadingComponent";
import { useStore } from "../../../app/stores/store";

function ActivityDetails() {
  const { activityStore } = useStore();
  const { openForm, selectedActivity, cancelSelectedActivity } = activityStore;

  if (!selectedActivity) return <LoadingComponent />;

  return (
    <Card fluid>
      <Image src={`/assets/categoryImages/${selectedActivity.category}.jpg`} />
      <Card.Content>
        <Card.Header>{selectedActivity.title}</Card.Header>
        <Card.Meta>
          <span>{selectedActivity.date}</span>
        </Card.Meta>
        <Card.Description>{selectedActivity.description}</Card.Description>
      </Card.Content>
      <Card.Content extra>
        <Button.Group widths="2">
          <Button
            color="blue"
            onClick={() => openForm(selectedActivity.id)}
            content="Edit"
          />
          <Button.Or />
          <Button onClick={cancelSelectedActivity} content="Cancel" />
        </Button.Group>
      </Card.Content>
    </Card>
  );
}

export default observer(ActivityDetails);
