var api = {
  getMessages: async function() {
    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const messages = await response.json();

      // removes line breaks; wtf why are they are there?
      messages.forEach(message => {
        message.title = message.title.replace(/\n/g, "");
        message.body = message.body.replace(/\n/g, "");
      });

      return messages;
    } catch (error) {
      console.log(error);
    }
  }
};

export default api;
