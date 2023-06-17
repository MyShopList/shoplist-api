interface resType {
    success: boolean,
    message: string,
    data: object
}

export const successRes = (message: string, data: object): resType => {
    return {
        success: true,
        message: message,
        data: data
    }
}

export const failureRes = (message: string): resType => {
    return {
        success: false,
        message: message,
        data: {}
    }
}