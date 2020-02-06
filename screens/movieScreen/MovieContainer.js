import React from "react";
import { Text } from "react-native";
import styled from "styled-components";
import MoviePresenter from "./MoviePresenter";
import { BG_COLOR } from "../../constants/Colors";

const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${BG_COLOR};
`;

const tempData = {
  hotMovies: [
    {
      id: 1,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200116_23/1579154974413LvtIf_JPEG/movie_image.jpg?type=m99_141_2",
      title: "클로젯",
      rate: "8.47",
      genres: ["미스터리", "드라마"],
      advanceRate: "33.08%",
      directors: ["김광빈"],
      actors: ["하정우", "김남길", "허율"]
    },
    {
      id: 2,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200121_188/1579574685635qE9iF_JPEG/movie_image.jpg?type=m99_141_2",
      title: "버즈 오브 프레이(할리 퀸의 황홀한 해방)",
      rate: "5.23",
      genres: ["액션", "모험", "범죄"],
      advanceRate: "24.56%",
      directors: ["캐시 얀"],
      actors: ["마고 로비"]
    },
    {
      id: 3,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200103_41/1578032244761ejKMX_JPEG/movie_image.jpg?type=m99_141_2",
      title: "남산의 부장들",
      rate: "7.42",
      genres: ["드라마"],
      advanceRate: "17.2%",
      directors: ["우민호"],
      actors: ["이병헌", "이성민", "곽도원", "이희준", "김소진"]
    },
    {
      id: 4,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200122_181/15796574636309Fux2_JPEG/movie_image.jpg?type=m99_141_2",
      title: "히트맨",
      rate: "7.20",
      genres: ["코미디", "액션"],
      advanceRate: "8.45%",
      directors: ["최원섭"],
      actors: ["권상우", "정준호", "황우슬혜", "이이경", "이지원"]
    },
    {
      id: 5,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200114_147/1578963901287frmdl_JPEG/movie_image.jpg?type=m99_141_2",
      title: "인셉션",
      rate: "9.22",
      genres: ["액션", "모험", "SF", "스릴러"],
      advanceRate: "2.23%",
      directors: ["크리스토퍼 놀란"],
      actors: [
        "레오나르도 디카프리오",
        "와타나베 켄",
        "조셉 고든 레빗",
        "마리옹 꼬띠아르",
        "엘렌 페이지",
        "톰 하디"
      ]
    }
  ],
  nowPlaying: [
    {
      id: 6,
      imgUrl:
        "https://movie-phinf.pstatic.net/20191220_49/1576828214038i4ukE_JPEG/movie_image.jpg?type=m99_141_2",
      title: "타오르는 여인의 초상",
      rate: "9.02",
      genres: ["드라마"],
      advanceRate: "2.18%",
      directors: ["셀린 시아마"],
      actors: [
        "아델 하에넬",
        "노에미 메를랑",
        "루아나 바야미",
        "발레리아 골리노"
      ]
    },
    {
      id: 7,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200121_285/1579591964650C0yMw_JPEG/movie_image.jpg?type=m99_141_2",
      title: "조조 래빗",
      rate: "9.45",
      genres: ["코미디", "드라마", "전쟁"],
      advanceRate: "2.08%",
      directors: ["타이카 와이티티"],
      actors: [
        "스칼렛 요한슨",
        "로만 그리핀 데이비스",
        "타이카 와이티티",
        "토마신 맥켄지"
      ]
    },
    {
      id: 8,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200120_187/157948230962440pnt_JPEG/movie_image.jpg?type=m99_141_2",
      title: "스파이 지니어스",
      rate: "9.35",
      genres: ["애니메이션", "액션", "모험", "코미디", "가족", "SF"],
      advanceRate: "1.7%",
      directors: ["닉 브루노", "트로이 콴"],
      actors: ["윌 스미스", "톰 홀랜드"]
    },
    {
      id: 9,
      imgUrl:
        "https://movie-phinf.pstatic.net/20200204_176/1580793082037tcbt7_JPEG/movie_image.jpg?type=m99_141_2",
      title: "페인 앤 글로리",
      rate: "8.64",
      genres: ["드라마"],
      advanceRate: "1.13%",
      directors: ["페드로 알모도바르"],
      actors: ["페넬로페 크루즈", "안토니오 반데라스"]
    }
  ]
};

export default class extends React.Component {
  state = {
    hotMovies: tempData.hotMovies,
    nowPlaing: tempData.nowPlaying
  };
  render() {
    const { hotMovies, nowPlaying } = this.state;
    return (
      <Container>
        <MoviePresenter hotMovies={hotMovies} nowPlaying={nowPlaying} />
      </Container>
    );
  }
}
