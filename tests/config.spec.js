const dry = require('../index')

const routeConfigs = [
    {
        path: '/aadhar',
        middleware: dry.body({
            data: { type: dry.Types.AadhaarNumber }
        }),
        payload: {
            invalid: {
                data: '999941057058'
            }
        }
    },
    {
        path: '/email',
        middleware: dry.body({
            data: { type: dry.Types.EmailAddress }
        }),
        payload: {
            valid: {
                data: 'test@gmail.com'
            },
            invalid: {
                data: 'kek@'
            }
        }
    },
    {
        path: '/objectid',
        middleware: dry.body({
            data: { type: dry.Types.ObjectId }
        }),
        payload: {
            valid: {
                data: '6156022b0000000000000342'
            },
            invalid: {
                data: 'random'
            }
        }
    },
    {
        path: '/pan',
        middleware: dry.body({
            data: { type: dry.Types.PAN_IN }
        }),
        payload: {
            valid: {
                data: 'ABCDE1234F'
            },
            invalid: {
                data: 'XYZ123456J'
            }
        }
    },
    {
        path: '/uuid',
        middleware: dry.body({
            data: { type: dry.Types.uuid }
        }),
        payload: {
            valid: {
                data: '9a7b478f-bdf2-4e2b-b58c-2bd052312684'
            },
            invalid: {
                data: 'kek'
            }
        }
    },
    {
        path: '/number',
        middleware: dry.body({
            data: { type: Number, min: 10, max: 15 }
        }),
        payload: {
            valid: {
                data: 11
            },
            invalid: {
                data: 9
            }
        }
    },
    {
        path: '/string',
        middleware: dry.body({
            data: { type: String, minLength: 10, maxLength: 20 }
        }),
        payload: {
            valid: {
                data: "Hello world"
            },
            invalid: {
                data: "Hi"
            }
        }
    },
    {
        path: '/array',
        middleware: dry.body({
            data: { type: Array, minLength: 2, maxLength: 5 }
        }),
        payload: {
            valid: {
                data: [1,2,3]
            },
            invalid: {
                data: [1]
            }
        }
    }
]

module.exports = { routeConfigs }