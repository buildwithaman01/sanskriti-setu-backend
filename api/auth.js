export default function handler(request, response) {
  // We only want to handle POST requests for login
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Method Not Allowed' });
  }

  // Get the username from the request body (the frontend will send this)
  const { username } = request.body;

  // If no username is provided, return an error
  if (!username) {
    return response.status(400).json({ message: 'Username is required' });
  }

  // This is the SIMULATED part. In a real app, we would check a password.
  // Here, we just create a fake user object and send it back.
  const fakeUser = {
    id: 'user_12345',
    name: username,
    email: `${username.toLowerCase().replace(' ', '')}@sanskritisetu.com`,
  };

  // Send a success response with the fake user data
  response.status(200).json({ success: true, user: fakeUser });
}