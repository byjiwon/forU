import React from "react";
import styled from "styled-components";
import MovieItem from "./MovieItem";
import Layout from "../constants/Layout";
import { TINT_COLOR } from "../constants/Colors";

const ScrollView = styled.ScrollView``;

const Container = styled.View`
  padding-left: 20px;
`;

const Title = styled.Text`
  color: ${TINT_COLOR}
  font-weight: 600;
  font-size: 12px;
  margin-bottom: 10px;
`;

const Section = ({ title, children }) => (
  <Container>
    <Title>{title}</Title>
    <ScrollView>{children}</ScrollView>
  </Container>
);

export default Section;
