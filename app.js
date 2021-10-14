const AWS = require("aws-sdk")
const KEY_ID = "AKIAYFFZ6INKSSWKHP56"
const SECRET_KEY = "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"
const fs = require("fs")

const BUCKET_NAME = 'try0000011111111111'

const s3 = new AWS.S3({
    accessKeyId: KEY_ID,
    secretAccessKey: SECRET_KEY
});

// const params ={
//     Bucket: BUCKET_NAME
// }

// s3.createBucket(params,(err, data)=>{
//     if(err){
//         console.log(err)
//     }
//     else{
//         console.log("Bucket created successfully")
//     }
// })

const uploadfile = (filename) => {
    const filecontent = fs.readFileSync(filename)

    const params = {
        Bucket: BUCKET_NAME,
        Key: 'Vid.mp4',
        Body: filecontent,
        contentType: 'video/MP4'
    }

    s3.upload(params, (err, data)=>{
        if(err){
            console.log(err)
        }
        else{
            console.log("File uploaded Successfully", data.Location)
        }
    })
}

uploadfile('a.mp4')