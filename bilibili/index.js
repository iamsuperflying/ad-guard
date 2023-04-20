const version = "1.0.0";
const proxy_name = " 哔哩哔哩 AdGuard";
console.log(`${proxy_name}: ${version}`);

let body = $response.body;
const url = $request.url;

// 开屏
const bl_splash = /\/splash\/show/.test(url);
// 首页信息流
const bl_feed = /\/feed\/index/.test(url);

// 开屏
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

// 首页信息流
if (bl_feed) {
  let obj = JSON.parse(body);
  console.log('首页信息流 guard......');
  if (obj.data && obj.data.items) {
    obj.data.items = obj.data.items.filter((item) => !item.ad_info);
  }
  body = JSON.stringify(obj);
}

$done({ body });