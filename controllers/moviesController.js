import connection from "../data/db";

const index = (req, res) => {
  const sql = "SELECT * FROM db_movies.movies";
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err });
    res.json(results);
  });
};


const show = (req, res) => {
  const { id } = req.params;
  const movieQuery = "SELECT * FROM movies WHERE id = ?";
  const reviewsQuery = "SELECT * FROM reviews WHERE movie_id = ?";

  connection.query(movieQuery, [id], (err, movieResult) => {
    if (err) return res.status(500).json({ error: err });

    connection.query(reviewsQuery, [id], (err, reviewResults) => {
      if (err) return res.status(500).json({ error: err });

      res.json({
        ...movieResult[0],
        reviews: reviewResults
      });
    });
  });
};

module.exports = {
  index,
  show,
};