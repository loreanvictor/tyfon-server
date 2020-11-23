import { server } from '../src';

server({
  getMessage: async (name) => `Hellow ${name}!`
}).listen(8000, () => console.log('Listening on 8000 ...'));
