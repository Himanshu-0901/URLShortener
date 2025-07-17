import {generateNanoId} from "../utils/helper.js";

export const createShortUrl = async (req,res)=>{
    const {url} = req.body;
    const shortUrl = generateNanoId(6);
    const newUrl = new urlSchema({
        full_url:url,
        short_url:shortUrl
    });
    newUrl.save();
    res.send(shortUrl);
}