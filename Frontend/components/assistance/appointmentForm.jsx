import { Component } from "react";
import { instanceOf } from "prop-types";

import { withCookies, Cookies } from "react-cookie";

import AssistanceType from "./assistanceType";
import FirstStep from "./firstStep";
import SecondStep from "./secondStep";

import { Typography } from "@material-ui/core";

class AppointmentForm extends Component {
  static propTypes = {
    cookies: instanceOf(Cookies).isRequired,
  };

  state = {
    step: 0,
    assistanceType: "",
    category: "",
    description: "",
    meetingType: "",
    meetingTime: "",
  };

  handleStepChange = async (step) => {
    /*
    const { cookies } = this.props;
    const token = cookies.get("token");
    console.log("Token from cookies in appointment form", token);

    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ token: token }),
    };
    const response = await fetch(server + "/api/CLICK", requestOptions);
    const reply = await response.json();
    console.log("msg from server", reply.msg);
    */

    this.setState({ step: step });
  };

  handleFormDataChange = (field, value) => {
    this.setState({ [field]: value });
  };

  render() {
    const { step, assistanceType, category, description, meetingType, meetingTime } = this.state;

    const values = {
      assistanceType,
      category,
      description,
      meetingType,
      meetingTime,
    };

    switch (step) {
      case 0:
        return <AssistanceType setStep={this.handleStepChange} setFormData={this.handleFormDataChange} />;

      case 1:
        return (
          <FirstStep
            category={category}
            description={description}
            setStep={this.handleStepChange}
            setFormData={this.handleFormDataChange}
          />
        );

      case 2:
        return (
          <SecondStep
            type={meetingType}
            time={meetingTime}
            setStep={this.handleStepChange}
            setFormData={this.handleFormDataChange}
          />
        );

      case 3:
        return <CompletedStep formData={values} />;
    }
  }
}

const CompletedStep = ({ formData }) => {
  return (
    <div>
      <h1 align="center">Completed!</h1>
      <Typography variant="body1">Your meeting token is 2342352</Typography>
    </div>
  );
};

export default withCookies(AppointmentForm);
