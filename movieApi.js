const axios = require("axios");
const cheerio = require("cheerio");

const getMovies = async () => {
  try {
    const html = await axios.get(
      "https://movie.naver.com/movie/running/current.nhn"
    );
    const $ = cheerio.load(html.data);
    let ulList = [];
    const $bodyList = $("div.lst_wrap ul").children("li");
    $bodyList.map(function(i) {
      const getImgUrl = $(this)
        .find("div.thumb a img")
        .attr("src");

      const getTitle = $(this)
        .find("dl.lst_dsc dt a")
        .text();

      const getRate = $(this)
        .find("span.num")
        .first()
        .text();

      let genres = [];
      const getGenres = $(this)
        .find("span.link_txt")
        .first()
        .children();
      getGenres.each(function(i, elem) {
        genres[i] = $(this).text();
      });
      genres.join(", ");

      let advanceRate = [];
      const getAdvanceRate = $(this)
        .find("div.star_t1")
        .last()
        .children();
      getAdvanceRate.each(function(i) {
        advanceRate[i] = $(this).text();
      });
      advanceRate = advanceRate[0] + "%";

      let directors = [];
      const getDirector = $(this)
        .find("dt.tit_t2")
        .next()
        .find("a");
      getDirector.each(function(i) {
        directors[i] = $(this).text();
      });
      directors.join(", ");

      let actors = [];
      const getActor = $(this)
        .find("dt.tit_t3")
        .next()
        .find("a");
      getActor.each(function(i) {
        actors[i] = $(this).text();
      });
      actors.join(", ");

      ulList[i] = {
        id: i + 1,
        imgUrl: getImgUrl,
        title: getTitle,
        rate: getRate,
        genres,
        advanceRate,
        directors,
        actors
      };
      ulList.push(i);
    });
    const data = ulList;
    return data;
  } catch (e) {
    console.log(e);
  }
};

const Movies = getMovies();

const movieApi = {
  getHotmovies: () => getMovies(),
  getNowPlaying: () => getMovies()
};

module.exports = movieApi;
