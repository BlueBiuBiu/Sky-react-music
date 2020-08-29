const DEV_BASEURL = "http://123.207.32.32:9001"
const PRO_BASEURL = "http://skyxxxxxx"

export const BASEURL = process.env.NODE_ENV === 'development'? DEV_BASEURL: PRO_BASEURL;
export const TIMEOUT = 5000