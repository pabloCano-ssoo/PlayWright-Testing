
import {
    EchoRequest,
    StartBackgroundJobRequest
} from './utilities-model';

export const START_BACKGROUND_JOB: StartBackgroundJobRequest = {
    durationMs: 5000
};

export const ECHO_POST: EchoRequest = {
    hello: 'world'
};

export const ECHO_PUT: EchoRequest = {
    name: 'Playwright',
    action: 'update'
};

export const ECHO_PATCH: EchoRequest = {
    status: 'active'
};

export const ECHO_DELETE: EchoRequest = {
    id: 1,
    action: 'delete'
};
