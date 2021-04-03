import React, { ChangeEvent, useState } from "react";
import { Button, Form, Header, Segment } from "semantic-ui-react";
import { Activity } from "../../../models/activity";

interface Props {
  selectedActivity: Activity | undefined;
  closeForm: () => void;
  createOrEdit: (activity: Activity) => void;
}

function ActivityForm({ selectedActivity, closeForm, createOrEdit }: Props) {
  const initialState = selectedActivity ?? {
    id: "",
    title: "",
    date: "",
    description: "",
    category: "",
    city: "",
    venue: "",
  };

  const [activity, setActivity] = useState(initialState);

  function handleSubmit() {
    createOrEdit(activity);
  }

  function handleInputChange(
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) {
    const { name, value } = event.target;
    setActivity({ ...activity, [name]: value });
  }

  return (
    <Segment clearing>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <Header
          as="h2"
          content={selectedActivity ? "Edit Activity" : "Create New Activity"}
          subheader={
            selectedActivity
              ? "Edit fields that you want and press Submit button"
              : "Fill the form and press Submit button"
          }
        />
        <Form.Input
          placeholder="Title"
          value={activity.title}
          name="title"
          onChange={handleInputChange}
        />
        <Form.TextArea
          placeholder="Description"
          value={activity.description}
          name="description"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Category"
          value={activity.category}
          name="category"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Date"
          value={activity.date}
          name="date"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="City"
          value={activity.city}
          name="city"
          onChange={handleInputChange}
        />
        <Form.Input
          placeholder="Venue"
          value={activity.venue}
          name="venue"
          onChange={handleInputChange}
        />
        <Button.Group widths="2">
          <Button content="Cancel" onClick={closeForm} type="button" />
          <Button.Or />
          <Button positive type="Submit" content="Submit" />
        </Button.Group>
      </Form>
    </Segment>
  );
}

export default ActivityForm;
