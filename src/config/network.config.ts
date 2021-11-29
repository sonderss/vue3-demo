interface Headers {
    baseUrl: string,
    contentType: string
}
const netConfig: Headers = {
    baseUrl: process.env.NODE_ENV === 'development' ? 'http://localhost:3001' : 'http://121.5.78.186:3001',
    contentType: "application/json; charset=utf-8"
}

export default netConfig