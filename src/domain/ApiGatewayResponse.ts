export interface ApiGatewayResponse {
    outputs: Output[]
}

export interface Output {
    text: string
    stop_reason: string
}


export interface ApiGatewayRequest {
    body: string
}