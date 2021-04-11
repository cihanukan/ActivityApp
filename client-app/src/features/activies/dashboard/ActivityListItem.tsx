import React from "react";
import { Link } from "react-router-dom";
import { Button, Icon, Item, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";
import { format } from "date-fns";

interface Props {
  activity: Activity;
}

function ActivityListItem({ activity }: Props) {
  return (
    <Segment.Group>
      <Segment>
        <Item.Group>
          <Item>
            <Item.Image size="tiny" circular src="/assets/user.png" />
            <Item.Content>
              <Item.Header as={Link} to={`/activities/${activity.id}`}>
                {activity.title}
              </Item.Header>
            </Item.Content>
            <Item.Description>Hosted by Cihan</Item.Description>
          </Item>
        </Item.Group>
      </Segment>
      <Segment>
        <span>
          <Icon name="clock" /> {format(activity.date!, "dd MMM yyyy h:mm aa")}
          &nbsp;&nbsp;&nbsp;&nbsp;
          <Icon name="marker" /> {activity.venue}
        </span>
      </Segment>
      <Segment secondary>Attendees go here</Segment>
      <Segment clearing>
        <span>{activity.description}</span>
        <Button
          as={Link}
          to={`/activities/${activity.id}`}
          floated="right"
          color="teal"
          content="View"
        />
      </Segment>
    </Segment.Group>
  );
}

export default ActivityListItem;
