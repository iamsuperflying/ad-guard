const version = "1.0.0";
const proxy_name = " 哔哩哔哩 AdGuard";
console.log(`${proxy_name}: ${version}`);

let body = $response.body;
const url = $request.url;

const bl_splash = /\/x\/v2\/splash\/show/.test(url);

if (bl_splash) {
  let obj = JSON.parse(body);
  if (obj.data && obj.data.show) {
    // 9999/12/31 00:00:00
    // const stime = 253402185600;
    // const etime = 253402185600;
    obj.data.show = [];
  }
  body = JSON.stringify(obj);
}

$done({ body });