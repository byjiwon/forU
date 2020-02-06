import React from "react";
import propTypes from "prop-types";
import styled from "styled-components";
import Swiper from "react-native-swiper";
import MovieSlide from "./MovieSlide";

const View = styled.View`
  height: 300px;
`;

const MovieSlider = ({ movies }) => (
  <Swiper showsPagination={false} autoplay={true} style={{ height: 300 }}>
    {movies.map(movie => (
      <View key={movie.id}>
        <MovieSlide
          id={movie.id}
          imgUrl={movie.imgUrl}
          title={movie.title}
          rate={movie.rate}
          genres={movie.genres}
          directors={movie.directors}
          actors={movie.actors}
        />
      </View>
    ))}
  </Swiper>
);

export default MovieSlider;
