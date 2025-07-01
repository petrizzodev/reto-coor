import http from 'k6/http';
import { check } from 'k6';

export let options = {
  stages: [
    { duration: '15s', target: 100 },
    { duration: '15s', target: 150 },
    { duration: '15s', target: 200 },
    { duration: '15s', target: 250 },
  ],
  thresholds: {
    http_req_duration: ['p(95)<2000'],
    http_req_failed: ['rate<0.05'],
  },
};

export default function () {
  const url = 'https://apiv2-test.coordinadora.com/guias/cm-guias-consultas-ms/guia/99020012725';
  const res = http.get(url);
  check(res, {
    'status is 200': (r) => r.status === 200,
  });
} 