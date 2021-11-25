interface Headers {
    baseUrl: string,
    contentType: string
}

const netConfig: Headers = {
    baseUrl: 'http://localhost:3001',
    contentType: "application/json; charset=utf-8"
}

export default netConfig