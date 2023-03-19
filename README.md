<p align="center"><a href="https://nodejs.org/en/" target="_blank"><img src="https://raw.githubusercontent.com/github/explore/80688e429a7d4ef2fca1e82350fe8e3517d3494d/topics/nodejs/nodejs.png" width="100"></a></p>

## Steps to run application

1. Inject your variable in env.ts

2. 
```
tsc --watch
```
```
npm start
```
3. Open [http://localhost:3000/spotify](http://localhost:3000/spotify) and take a look around.

## Setup databse

CREATE TABLE `spotify_song` (
  `id` bigint(20) NOT NULL AUTO_INCREMENT,
  `track_name` varchar(45) NOT NULL,
  `artist_name` varchar(45) NOT NULL,
  `genre` varchar(45) NOT NULL,
  `popularity` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=17 DEFAULT CHARSET=utf8mb4;


INSERT INTO `spotify_song` (`track_name`,`artist_name`,`genre`,`popularity`) VALUES
('Senorita','Shawn Mendes','canadian pop',79),
('China','Anuel AA','reggaeton flow',92),
('boyfriend (with Social House)','Ariana Grande','dance pop',85),
('Beautiful People (feat. Khalid)','Ed Sheeran','pop',86),
('Goodbyes (Feat. Young Thug)','Post Malone','dfw rap',94),
('I Dont Care (with Justin Bieber)','Ed Sheeran','pop',84),
('bad guy','Billie Eilish','electropop',95),
('Callaita','Bad Bunny','reggaeton',93),
('Ransom','Lil Tecca','trap music',92),
('How Do You Sleep?','Sam Smith','pop',90),
('Old Town Road - Remix','Lil Nas X','country rap',87),
('Loco Contigo (feat. J. Balvin & Tyga)','DJ Snake','dance pop',86),
('Someone You Loved','Lewis Capaldi','pop',88),
('Otro Trago - Remix','Sech','panamanian pop',87),
('Money In The Grave (Drake ft. Rick Ross)','Drake','canadian hip hop',92),
('No Guidance (feat. Drake)','Chris Brown','dance pop',82),
('LA CANC','J Balvin','latin',90),
('Sunflower - Spider-Man=> Into the Spider-Verse','Post Malone','dfw rap',91),
('Lalala','Y2K','canadian hip hop',88),
('Truth Hurts','Lizzo','escape room',91),
('Piece Of Your Heart','MEDUZA','pop house',91),
('Panini','Lil Nas X','country rap',91),
('No Me Conoce - Remix','Jhay Cortez','reggaeton flow',83),
('Soltera - Remix','Lunay','latin',91),
('bad guy (with Justin Bieber)','Billie Eilish','electropop',89),
('If I Cant Have You','Shawn Mendes','canadian pop',70),
('Dance Monkey','Tones and I','australian pop',83),
('Its You','Ali Gatie','canadian hip hop',89),
('Con Calma','Daddy Yankee','latin',91),
('QUE PRETENDES','J Balvin','latin',89),
('Takeaway','The Chainsmokers','edm',84),
('7 rings','Ariana Grande','dance pop',89),
('0.958333333','Maluma','reggaeton',89),
('The London (feat. J. Cole & Travis Scott)','Young Thug','atl hip hop',89),
('Never Really Over','Katy Perry','dance pop',89),
('Summer Days (feat. Macklemore & Patrick Stump of Fall Out Boy)','Martin Garrix','big room',89),
('Otro Trago','Sech','panamanian pop',91),
('Antisocial (with Travis Scott)','Ed Sheeran','pop',87),
('Sucker','Jonas Brothers','boy band',80),
('fuck, im lonely (with Anne-Marie)','Lauv','dance pop',78),
('Higher Love','Kygo','edm',88),
('You Need To Calm Down','Taylor Swift','dance pop',90),
('Shallow','Lady Gaga','dance pop',87),
('Talk','Khalid','pop',84),
('Con Altura','ROSAL','r&b en espanol',88),
('One Thing Right','Marshmello','brostep',88),
('Te Robar','Nicky Jam','latin',88),
('Happier','Marshmello','brostep',88),
('Call You Mine','The Chainsmokers','edm',88),
('Cross Me (feat. Chance the Rapper & PnB Rock)','Ed Sheeran','pop',82)
;

## Resources

- https://stackoverflow.com/questions/73042643/typescript-create-a-mysql2-connection-object-inside-a-class
- https://dev.to/tqbit/a-step-by-step-guide-to-migrate-a-nodejs-web-app-to-typescript-5hi2
- https://stackoverflow.com/questions/62096269/cant-run-my-node-js-typescript-project-typeerror-err-unknown-file-extension
- https://wanago.io/2018/12/03/typescript-express-tutorial-routing-controllers-middleware/
- https://amirmustafaofficial.medium.com/node-js-and-express-js-with-typescript-d4ea7e61096

