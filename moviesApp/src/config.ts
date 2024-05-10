export const getAPIConfig = async () => {
  const config = await fetch("./config.json").then((response) => response.json());
  return {
      API: {
          endpoints: [
              {
                  name: "appApi",
                  endpoint: config.apiUrl,
              },
              {
                  name: "authApi",
                  endpoint: config.authUrl,
              },
          ],
      },
  };
};
