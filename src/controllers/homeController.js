const Tweet = require('../models/tweet');
const User = require('../models/user');

module.exports.root = async function(req, res) {
  // here async await is also give the promises
    try {
        const tweets = await Tweet.find({})
        .populate('user')
        .populate({
            path: 'comments',
            populate: {
                path: 'user'
            }
        }).sort({"createdAt": -1})// this will give the tweet in the sorted form if you want give sort reverse order than put -1;
        .exec();// this we used to return the promise 
        console.log(tweets);
        let fetchedTweets = tweets;
        // console.log(tweets);
        const users = await User.find({});
        console.log(users);
        
        return res.render('home', {
            title: "Twitter", 
            tweets: fetchedTweets,
            users: users
        });
    } catch(err) {
        console.error(err);
        return;
    }
    return res.render('home',{title:"Twitter"});
}
