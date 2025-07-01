import http from 'k6/http';
import { check, sleep } from 'k6';

export let options = {
  vus: 20,
  duration: '1m',
  thresholds: {
    http_req_duration: ['p(95)<500'],
    http_req_failed: ['rate<0.01'],
  },
};

export default function () {
  const url = 'https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/99020012725';
  const res = http.get(url);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
  sleep(0.5);
}
