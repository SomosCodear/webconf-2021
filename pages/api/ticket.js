import AWSSDK from 'aws-sdk';

export default async (req, res) => {
  const { rombianUserId, webconfTicketBase64Data } = req.body;
  const s3 = new AWSSDK.S3({
    credentials: {
      accessKeyId: process.env.WEBCONF_2021_AWS_ACCESS_KEY_ID,
      secretAccessKey: process.env.WEBCONF_2021_AWS_SECRET_ACCESS_KEY,
    },
  });
  const bucket = 'webconf-tickets';
  const bucketEntry = `ticket-${rombianUserId}.png`;
  const bucketObject = {
    Bucket: bucket,
    Key: bucketEntry,
  };

  s3.headObject(bucketObject, (err) => {
    if (err && err.code === 'NotFound') {
      s3.upload(
        {
          ...bucketObject,
          ContentEncoding: 'base64',
          ContentType: 'image/png',
          Body: Buffer.from(webconfTicketBase64Data, 'base64'),
          ACL: 'public-read',
        },
        (uploadErr, data) => {
          if (uploadErr) {
            res.json({ error: uploadErr });
          } else {
            res.status(200).json({ url: data.Location });
          }
        },
      );
    } else {
      res.status(200).json({ url: `https://${bucket}.s3.sa-east-1.amazonaws.com/${bucketEntry}` });
    }
  });
};
