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
                height={"310px"}
                chartType="PieChart"
                loader={<div>Loading Chart</div>}
                data={[
                  ["Product", "Sales by month"],
                  ["Cement", 11],
                  ["Paint", 2],
                  ["Pipes", 2],
                  ["Steel", 2],
                  ["Roofings", 7],
                ]}
                options={{
                  title: "Sales by product type",
                  // Just add this option
                  is3D: true,
                }}
                rootProps={{ "data-testid": "2" }}
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
