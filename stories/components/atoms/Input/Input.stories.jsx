import React from "react";

import Input from "../../../../components/atoms/Input";

export default {
  title: "Components/Atoms/Input",
  component: Input,
};

const Template = (args) => <Input {...args} />;

export const Default = Template.bind({});
Default.args = {
  label: "name",
  title: "Full Name",
  type: "text",
};
