# gamelinks [ ![Codeship Status for SteamHome/gamelinks](https://codeship.com/projects/b5368dc0-22b7-0133-bc4d-3a07b3152e0a/status?branch=master)](https://codeship.com/projects/96267)
This repo contains the data files used to display pertinent links for each game on SteamHome.

Data is stored in `json/appid.json` This appid refers to Steam's id for each game. This can be found in the store urls or from [SteamDB](http://steamdb.info)

Tests are run for pull requests and verify valid json. On merge, json is minifed and pushed to the gamelinks server.

More info for contributing soon!
 
