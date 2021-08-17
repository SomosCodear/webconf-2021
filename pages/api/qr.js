import fetch from 'node-fetch';

export default async (req, res) => {
  let url = 'https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=WEBCONF2021&margin=10';
  if (req.query.rombianUserId) {
    url = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${req.query.rombianUserId}&margin=10`;
  }

  const qrResponse = await fetch(url);
  const qrImage = await qrResponse.buffer();
  res.send(qrImage);
};
