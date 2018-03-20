const express = require('express');
const AWS = require('aws-sdk');
const fs= require('fs');

AWS.config.loadFromPath('./config.json');
AWS.config.update({region: 'us-east-1'});

const s3 = new AWS.S3();

var bucketParams = {
    Bucket: "guysidebottom1982"
    };

var objectParams = {
    Bucket: "guysidebottom1982",
    Key: "leeds-traffic.png"
};

// creates a new bucket if one doesnt already exist.
s3.createBucket(bucketParams, function(err, data) {
    if(err) console.log(err, err.stack);
    else console.log(data);
});
// retrieves an object from the bucket
s3.getObject(objectParams, function(err, data) {
    if(err) console.log(err, err.stack);
    else console.log(data);
});
// converts an object into a write stream which os then read streamed to a location of choice 
var file = fs.createWriteStream('/Users/guysidebottom/Desktop/downloaded.png');
s3.getObject(objectParams).createReadStream().pipe(file);




// s3.client.createBucket({Bucket: 'gsidebottom'}).done(function(resp) {
//     var data = {Bucket: 'gsidebottom', Key: 'my-key', Body: 'Hello!'};
//     s3.client.putObject(data).done(function(resp) {
//         console.log("successfully uploaded data to gsidebottom1982/leeds-traffic.png");
//     });
// });

// app.get('/get', (req, res) => {
//     res.send("Hello Index!");
// });

// app.post('/post', (req, res) => {
//     console.log(req.body);
//     res.send({
//         type: "POST request ok",
//         name: req.body.name,
//         age: req.body.age
//     });
// });

// app.put('/put', (req, res) => {
//     res.send({
//         type: "PUT request ok"
//     });
// });

// app.delete('/delete', (req, res) => {
//     res.send({
//         type: "DELETE request ok"
//     });
// });