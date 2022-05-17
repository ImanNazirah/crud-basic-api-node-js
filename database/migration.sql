CREATE TABLE `spotify_song` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `track_name` varchar(45) NOT NULL,
  `artist_name` varchar(45) NOT NULL,
  `genre` varchar(45) NOT NULL,
  `popularity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;

