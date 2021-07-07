const updateProjectById = ({ updateProjectUseCase }) => {
    return async function get(httpRequest) {
      const headers = {
        "Content-Type": "application/json",
      };
      try {
        console.log("HTTP REQUEST: ", httpRequest);
  
        const { source = {}, ...info } = httpRequest.body;
        source.ip = httpRequest.ip;
        source.browser = httpRequest.headers["User-Agent"];

        const toView = {
          ...info,
          source,
          id: httpRequest.params.id, // when id is passed
        };

        

        if( !httpRequest.body ){
          console.log(`%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%%`);
        console.log(httpRequest.body);
          return {
            headers,
            statusCode: 400,
            body: {
              error: e.message,
            },
          }
        } 
  
        const result = await updateProjectUseCase(toView);
        return {
          headers: {
            "Content-Type": "application/json",
          },
          statusCode: 200,
          body: { result },
        };
      
      } catch (e) {
        // TODO: Error logging
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
  };
  
  module.exports = updateProjectById;
  