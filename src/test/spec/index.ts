import { Application } from 'express';
import chai, { should, expect } from 'chai'; should();
import http from 'chai-http';import { APIInfo, Module } from '../../types';
  chai.use(http);


function runTest(
  app: Application,
  test: (req: ChaiHttp.Agent, cleanup: () => void) => void,
) {
  const server = app.listen(3017, () => test(chai.request(app), () => server.close()));
}


export function testTyFONServerSpec(app: (module: Module, api?: APIInfo) => Application) {
  it('should properly map get requests', done => {
    runTest(app({
      getMsg: async (user: { name: string }) => `Hellow ${user.name}!`,
    }), (req, clean) => {
      req.get('/msg?0={"name":"Jack"}').then(res => {
        clean();
        JSON.parse(res.text).should.equal('Hellow Jack!');
        res.status.should.equal(200);
        done();
      });
    });
  });

  it('should properly handle get query parameters not json serialized.', done => {
    runTest(app({
      getMsg: async (greet: string, name: string) => `${greet} ${name}!`,
    }), (req, clean) => {
      req.get('/msg?0=Hola&1=World').then(res => {
        clean();
        JSON.parse(res.text).should.equal('Hola World!');
        res.status.should.equal(200);
        done();
      });
    });
  });
}


export function testTyFONServerDateArgSupport(app: (module: Module, api?: APIInfo) => Application) {
  it('should handle date arguments.', done => {
    runTest(app({
      year: async (d: {date: Date}) => d.date.getFullYear()
    }), (req, clean) => {
      req.post('/year').send({ 0: { date: new Date('December 17, 1995 03:24:00') } }).then(res => {
        clean();
        res.text.should.equal('1995');
        done();
      });
    });
  })
}