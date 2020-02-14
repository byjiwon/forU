import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import MovieSlider from "../../components/MovieSlider";
import Section from "../../components/MovieSection";
import MovieItem from "../../components/MovieItem";
import { BG_COLOR } from "../../constants/Colors";
import Loader from "../../components/Loader";

const Container = styled.ScrollView`
  background-color: ${BG_COLOR};
`;

const MoviePresenter = ({ loading, hotMovies, nowPlaying }) =>
  loading ? (
    <Loader />
  ) : (
    <Container>
      <MovieSlider movies={hotMovies} />
      <Section movies={nowPlaying} title="Box Office">
        {nowPlaying.map(movie => (
          <MovieItem
            key={movie.id}
            id={movie.id}
            imgUrl={movie.imgUrl}
            title={movie.title}
            rate={movie.rate}
            genres={movie.genres}
            directors={movie.directors}
            actors={movie.actors}
            advanceRate={movie.advanceRate}
          />
        ))}
      </Section>
    </Container>
  );

export default MoviePresenter;
