import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";

const Container = styled.ScrollView`
  flex: 1;
`;

const MoviePresenter = ({ hotMovies, nowPlaying }) => (
  <Container>
    <MovieSlider movies={hotMovies} />
  </Container>
);

export default MoviePresenter;
