function generate_response(success, message, data) {
    return {
        success,
        message,
        data
    };
}

module.exports = generate_response;
