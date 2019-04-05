import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import EventList from "../eventList/EventList";
import EventAttendee from "../eventList/EventAttendee";
import Activities from "../eventActivity/Activities";
class eventDashboard extends Component {
  render() {
    return (
      <Grid>
        <Grid.Column width={10}><EventList/><EventAttendee/> </Grid.Column>
        <Grid.Column width={6}><Activities/></Grid.Column>
        </Grid>
    );
  }
}
export default eventDashboard;
