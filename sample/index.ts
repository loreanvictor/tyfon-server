import { server } from '../src';

server({
  getMessage: async (user: {name: string}) => `Hellow ${user.name}!`
}).listen(8000, () => console.log('Listening on 8000 ...'));
