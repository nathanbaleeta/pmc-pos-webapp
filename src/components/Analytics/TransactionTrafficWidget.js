import React, { Component, Fragment } from "react";
import { Chart } from "react-google-charts";

import PropTypes from "prop-types";
import { withStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";

//import firebase from "../common/firebase";

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: "center",
    color: theme.palette.text.secondary,
  },
  icon: {
    margin: theme.spacing(1),
    fontSize: 32,
    color: theme.palette.text.primary,
  },
});

class TransporterTrafficWidget extends Component {
  state = {};

  componentDidMount() {}
  render() {
    const { classes } = this.props;
    //const {} = this.state;

    return (
      <Fragment>
        <Card className={classes.card}>
          <CardActionArea>
            <div
              style={{
                padding: "20px",
                background: "white",
                color: "black",
              }}
            >
              <Chart
                width={"100%"}
                height={"540px"}
                chartType="Line"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Day", "Momo Pay", "Bank Transfers"],
                  [1, 37.8, 80.8],
                  [2, 30.9, 69.5],
                  [3, 25.4, 57],
                  [4, 11.7, 18.8],
                  [5, 11.9, 17.6],
                  [6, 8.8, 13.6],
                  [7, 7.6, 12.3],
                  [8, 12.3, 29.2],
                  [9, 16.9, 42.9],
                  [10, 12.8, 30.9],
                  [11, 5.3, 7.9],
                  [12, 6.6, 8.4],
                  [13, 4.8, 6.3],
                  [14, 4.2, 6.2],
                ]}
                options={{
                  chart: {
                    title: "Monthly Transaction performance",
                    subtitle: "in Ug Shs",
                  },
                }}
                rootProps={{ "data-testid": "3" }}
              />
            </div>
          </CardActionArea>
        </Card>
      </Fragment>
    );
  }
}

TransporterTrafficWidget.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TransporterTrafficWidget);
