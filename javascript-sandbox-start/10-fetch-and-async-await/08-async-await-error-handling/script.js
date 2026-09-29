const getUsers = async () => {
  try {
    // const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const response = await fetch('https://httpbin.org/status/500');

    if (!response.ok) {
      throw new Error('Request Failed');
    }

    const data = await response.text();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
};

// getUsers();

const getPosts = async () => {
  const response = await fetch('https://jsonplaceholder.typicode.com/postsa');

  if (!response.ok) {
    throw new Error('Request Failed');
  }

  const data = await response.json();
  console.log(data);
};

getPosts().catch((error) => console.log(error));
