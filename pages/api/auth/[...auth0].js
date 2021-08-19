import { handleAuth, handleCallback } from '@auth0/nextjs-auth0';
import { User } from '~/data/rombian';

const afterCallback = async (req, res, session) => {
  const [rombianUser] = await User.findOrCreate({
    where: { email: session.user.email },
    defaults: { alias: session.user.given_name },
  });

  // eslint-disable-next-line no-param-reassign
  session.user.rombianUser = rombianUser;

  return session;
};

export default handleAuth({
  async callback(req, res) {
    await handleCallback(req, res, { afterCallback });
  },
});
