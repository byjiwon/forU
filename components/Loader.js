import React from "react";
import { ActivityIndicator } from "react-native";
import styled from "styled-components";
import { BG_COLOR } from "../constants/Colors";

const Container = styled.View`
  flex: 1;
  justify-content: center;
`;

export default Loader = () => (
  <Container>
    <ActivityIndicator color={BG_COLOR} />
  </Container>
);
