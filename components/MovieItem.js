import React from "react";
import styled from "styled-components";
import MoviePoster from "../components/MoviePoster";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-bottom: 15px;
`;

const Column = styled.View`
  height: 100%;
  margin-left: 20px;
  flex: 1;
  justify-content: flex-start;
  align-items: flex-start;
  padding-top: 5px;
`;
const Title = styled.Text`
  font-size: 14px;
  font-weight: 800;
  color: ${TINT_COLOR};
  margin-bottom: 5px;
`;
const Rate = styled.Text`
  color: ${TINT_COLOR};
  font-size: 13px;
  font-weight: 600;
  margin-bottom: 10px;
`;
const P = styled.Text`
  color: ${GREY_COLOR};
  margin-bottom: 5px;
  font-size: 12px;
`;

const AdvanceRate = styled.Text`
  color: ${GREY_COLOR};
  font-weight: 600;
`;

const MovieItem = ({
  id,
  imgUrl,
  title,
  rate,
  genres,
  directors,
  actors,
  advanceRate
}) => (
  <Container>
    <MoviePoster imgUrl={imgUrl} />
    <Column>
      <Title>{title}</Title>
      <Rate>⭐️ {rate}</Rate>
      <P>{directors.join(" / ")}</P>
      <P>{genres.join(" / ")}</P>
      <P>{actors.join(" / ")}</P>
      <AdvanceRate>예매율: {advanceRate}</AdvanceRate>
    </Column>
  </Container>
);

export default MovieItem;
