import sendRequest from './send-request';

const BASE_URL = '/api/wines';

export function getAll() {
    return sendRequest(BASE_URL);
}