import axios from "axios";

export default axios.create({
    baseURL: "https://api.rawg.io/api",
    params: {
        key: "a20679ba661c4aea9313678ebd133129"
    }
})

/**
 * GET https://api.rawg.io/api/platforms?key=YOUR_API_KEY
GET https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7
https://api.rawg.io/api/games
count       integer
next	    string <uri> Nullable
previous    string <uri> Nullable
results     Array of objects (Game)
 */