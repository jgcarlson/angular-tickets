import app from './src/server';
import './config/mongoose';

const env = app.get('env');
const port = app.get('port');

const server = app.listen(port, () => {
  console.log(`---- Server running on port ${port} in ${env.toUpperCase()} mode ----`);
});

export default server;
