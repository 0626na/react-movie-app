export const getMovie = async (id) => {
  const json = await (
    await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
  ).json();
  return json;
};

export const getMovies = async () => {
  const json = await (
    await fetch(
      "https://yts.mx/api/v2/list_movies.json?minimum_rating=8.8&sort_by=year"
    )
  ).json();
  return json;
};
