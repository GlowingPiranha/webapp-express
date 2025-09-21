import connection from "../data/db.js";

export const index = (req, res) => {
  const sql = "SELECT * FROM db_movies.movies";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });

    const movieCovers = results.map(movie => ({
      ...movie,
      image: `movies_cover/${movie.title.toLowerCase().replace(/\s/g, "_")}.jpg`
    }));
    res.json(movieCovers);
  });
};


export const show = (req, res) => {
  const { id } = req.params;
  const movieQuery = "SELECT * FROM movies WHERE id = ?";
  const reviewsQuery = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(movieQuery, [id], (err, movieResult) => {
    if (err) return res.status(500).json({ error: err });
    if (!movieResult.length) return res.status(404).json({ error: "Movie not found" });

    connection.query(reviewsQuery, [id], (err, reviewResults) => {
      if (err) return res.status(500).json({ error: err });

      const movie_cover = {
        ...movieResult[0],
        image: `movies_cover/${movieResult[0].title.toLowerCase().replace(/\s/g, "_")}.jpg`,
        reviews: reviewResults
      };

      res.json(movie_cover);
    });
  });
};

