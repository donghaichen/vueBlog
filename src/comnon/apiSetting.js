const serviceModule = {
  getSiderbar: {
    url: "_sidebar.md",
    method: "GET"
  },
  getReadeMe: {
    url: "README.md",
    method: "get"
  },
  getPost: {
    url: "posts/",
    method: "get"
  }
};

const apiSetting = {...serviceModule};

export default apiSetting;
