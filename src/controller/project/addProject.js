const addProject = ({ addProjectUseCase }) => {
    return async function get(httpRequest) {
        const headers = {
            'Content-Type': 'application/json',
        }
        try {
            const { source = {}, ...info } = httpRequest.body;
            source.ip = httpRequest.ip;
            source.browser = httpRequest.headers["User-Agent"];
            const toView = { info, source };
            const result = await addProjectUseCase( toView );
            console.log(`RESULT CONTROLLER++++++++++++++++++++++++++++++++++++++++++++++\n${result}`);
            return {
                headers: {
                    'Content-Type': 'application/json',
                },
                statusCode: 201,
                body: { result },
            };
        } catch (e) {
            //TODO: Error Logging
            console.log(e);
            return {
                headers,
                statusCode: 400,
                body: {
                    error: e.message,
                },
            };
        }
    };
}

module.exports = addProject;