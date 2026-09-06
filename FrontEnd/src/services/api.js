const API_BASE_URL =
  import.meta.env.VITE_API_BASE_URL ||
  'http://localhost:8080/api'

// async function apiRequest(endpoint, options = {}) {
//   const response = await fetch(
//     `${API_BASE_URL}${endpoint}`,
//     {
//       ...options,
//       headers: {
//         'Content-Type': 'application/json',
//         ...(options.headers || {}),
//       },
//     }
//   )

//   const data = await response.json()

//   if (!response.ok) {
//     throw new Error(
//       data.message || 'Something went wrong'
//     )
//   }

//   return data
// }


  async function apiRequest(endpoint, options = {}) {
  try {
    const response = await fetch(
      `${API_BASE_URL}${endpoint}`,
      {
        ...options,
        headers: {
          'Content-Type': 'application/json',
          ...(options.headers || {}),
        },
      }
    );

    const data = await response.json();

    console.log("API URL:", `${API_BASE_URL}${endpoint}`);
    console.log("Status:", response.status);
    console.log("Response:", data);

    if (!response.ok) {
      throw new Error(data.error || data.message || `HTTP ${response.status}`);
    }

    return data;

  } catch (error) {
    console.error("API REQUEST ERROR:", error);
    throw error;
  }
}

export async function registerUser(userData) {

  return apiRequest(
    '/auth/register',
    {
      method: 'POST',

      body: JSON.stringify(userData),
    }
  )
}

export async function loginUser(userData) {

  return apiRequest(
    '/auth/login',
    {
      method: 'POST',

      body: JSON.stringify(userData),
    }
  )
}

export async function forgotPassword(email) {
  return apiRequest('/auth/forgot-password', {
    method: 'POST',
    body: JSON.stringify({
      email,
    }),
  })
}

export async function verifyOTP(email, otp) {
  return apiRequest('/auth/verify-otp', {
    method: 'POST',
    body: JSON.stringify({
      email,
      otp,
    }),
  })
}

export async function resetPassword(email, newPassword) {
  return apiRequest('/auth/reset-password', {
    method: 'POST',
    body: JSON.stringify({
      email,
      new_password: newPassword,
    }),
  })
}