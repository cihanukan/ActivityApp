import { observer } from "mobx-react-lite";
import React, { SyntheticEvent, useState } from "react";
import { Button, Item, Label, Segment } from "semantic-ui-react";
import { useStore } from "../../../app/stores/store";

function ActivityList() {
  const [target, setTarget] = useState("");
  const { activityStore } = useStore();
  const { loading, deleteActivity, activitiesByDate } = activityStore;

  function handleActivityDelete(
    event: SyntheticEvent<HTMLButtonElement>,
    id: string
  ) {
    setTarget(event.currentTarget.name);
    deleteActivity(id);
  }

  return (
    <Segment>
      <Item.Group divided>
        {activitiesByDate.map((activity) => (
          <Item key={activity.id}>
            <Item.Content>
              <Item.Header as="a">{activity.title}</Item.Header>
              <Item.Meta>{activity.date}</Item.Meta>
              <Item.Description>
                <div>{activity.description}</div>
                <div>
                  {activity.city}, {activity.venue}
                </div>
              </Item.Description>
              <Item.Extra>
                <Button.Group widths="1" floated="right">
                  <Button
                    color="blue"
                    content="View"
                    onClick={() => activityStore.selectActivity(activity.id)}
                  />
                  <Button.Or />
                  <Button
                    name={activity.id}
                    loading={loading && target === activity.id}
                    onClick={(event) =>
                      handleActivityDelete(event, activity.id)
                    }
                    content="Delete"
                    color="red"
                  />
                </Button.Group>
                {/* <Button floated="right" content="View" color="blue" />
                <Button floated="right" content="Delete" color="red" /> */}
                <Label basic content={activity.category} />
              </Item.Extra>
            </Item.Content>
          </Item>
        ))}
      </Item.Group>
    </Segment>
  );
}

export default observer(ActivityList);
