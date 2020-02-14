import React from "react";
import styled from "styled-components";
import MoviePoster from "./MoviePoster";
import propTypes from "prop-types";
import { withNavigation } from "react-navigation";
import { TINT_COLOR, GREY_COLOR } from "../constants/Colors";

const Container = styled.View`
  position: relative;
  flex: 1;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  margin-top: 60px;
`;

const Column = styled.View`
  margin-left: 20px;
  width: 80%;
`;

const Title = styled.Text`
  font-size: 15px;
  font-weight: 800;
  color: ${TINT_COLOR};
  margin-bottom: 5px;
`;

const P = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${GREY_COLOR};
  margin-vertical: 3px;
`;

const Rate = styled.Text`
  font-size: 12px;
  font-weight: 600;
  color: ${TINT_COLOR}
  margin-bottom: 10px;
`;

const Bg = styled.Image`
  position: absolute;
  opacity: 0.5;
  width: 375px;
  height: 100%;
`;

const Rank = styled.View`
  background-color: red;
  top: -8px;
  left: -8px;
  position: absolute;
  border-radius: 10px;
  width: 20px;
  height: 20px;
  z-index: 1;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

const RankNum = styled.Text`
  color: white;
  font-size: 10px;
  font-weight: 800;
`;

const PosterDiv = styled.View`
  margin-left: 30px;
`;

const DetailBtn = styled.TouchableOpacity`
  background-color: red;
  margin-top: 10px;
  padding: 5px;
  border-radius: 2.5px;
  width: 70px;
  height: 22px;
`;

const BtnText = styled.Text`
  color: ${TINT_COLOR}
  font-size: 10px;
  text-align: center;
  font-weight: 800;
`;

const BgImg = ({ imgUrl }) => <Bg source={{ uri: imgUrl }} />;

const MovieSlide = ({
  id,
  imgUrl,
  title,
  rate,
  genres,
  directors,
  actors,
  navigation
}) => (
  <Container>
    <PosterDiv>
      <Rank>
        <RankNum>{id}위</RankNum>
      </Rank>
      <MoviePoster imgUrl={imgUrl} />
    </PosterDiv>
    <Column>
      <Title>
        {title.length > 20 ? `${title.substring(0, 18)}...` : title}
      </Title>
      <Rate>⭐️ {rate}</Rate>
      <P>감독: {directors.join(" / ")}</P>
      <P>{genres.join(" / ")}</P>
      <P>
        출연:{" "}
        {actors.join(" / ").length > 20
          ? `${actors.join(" / ").substring(0, 15)}...`
          : actors.join(" / ")}
      </P>
      <DetailBtn
        onPress={() =>
          navigation.navigate({
            routeName: "Detail"
          })
        }
      >
        <BtnText>자세히 보기</BtnText>
      </DetailBtn>
    </Column>
  </Container>
);

MovieSlide.propTypes = {
  id: propTypes.number.isRequired,
  imgUrl: propTypes.string.isRequired,
  title: propTypes.string.isRequired,
  rate: propTypes.string.isRequired,
  genres: propTypes.array,
  directors: propTypes.array,
  actors: propTypes.array
};

export default withNavigation(MovieSlide);
