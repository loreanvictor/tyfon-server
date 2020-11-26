# tyfon-server

Create [express](https://expressjs.com) routers or apps that expose your functions as endpoints automatically.
```ts
import { server } from 'tyfon-server';

server({
  getMessage: async () => 'Hellow World!'
}).listen(8000);

// 🚀 check it out on `localhost:8000/message`
```
👉 [Learn more about TyFON](https://loreanvictor.github.io/tyfon/)

<br>

## Installation

```bash
npm i tyfon-server
```

<br>

## Usage

👉 Create a server:
```ts
import { server } from 'tyfon-server';

server({
  getMessage: async (name: string) => `Hellow ${name}!`
}).listen(8000);

// 🚀 check it out on `localhost:8000/message?0=World`
```

<br>

👉 Create a router:
```ts
import express from 'express';
import cors from 'cors';
import { json } from 'body-parser';
import { router } from 'tyfon-server';

const app = express();
app.use(cors());
app.use(json());
app.use('/funcs', router({
  getMessage: async (user: { name: string }) => `Hellow ${user.name}!`
});

app.listen(8000);

// 🚀 check it out on `localhost:8000/funcs/message?0={"name":"Jack"}`
```

<br>

[tyfon-conventions](https://github.com/loreanvictor/tyfon-conventions) is used to map function names to URL endpoints and Http methods. You can also provide SDK metadata that allows TyFON CLI to automatically build SDKs for your functions. 

👉 [Read this post for more information](https://loreanvictor.github.io/tyfon/advanced/custom-server).
