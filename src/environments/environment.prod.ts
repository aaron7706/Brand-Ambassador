let siteName = "play25news";
let origin = "";
let domain = "";
let hostname = window.origin;


if (hostname.indexOf('play25news.com') > -1 || hostname.indexOf('test.play25news.com') > -1 ) {
    siteName = 'play25news';
    domain = "play25news.com";
    origin = "play25news.com";
}


export const environment = {
siteName: siteName,
origin: origin,
domain: domain,
}