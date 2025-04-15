let siteName = "play25brand";
let origin = "";
let domain = "";
let hostname = window.origin;


if (hostname.indexOf('play25brand.com') > -1 ) {
    siteName = 'play25brand';
    domain = "play25brand.com";
    origin = "play25brand.com";
}


export const environment = {
siteName: siteName,
origin: origin,
domain: domain,
}