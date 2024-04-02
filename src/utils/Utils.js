import resolveConfig from 'tailwindcss/resolveConfig';

export const tailwindConfig = () => {
  // Tailwind config
  return resolveConfig('./src/css/tailwind.config.js');
};

export const hexToRGB = (h) => {
  let r = 0;
  let g = 0;
  let b = 0;
  if (h.length === 4) {
    r = `0x${h[1]}${h[1]}`;
    g = `0x${h[2]}${h[2]}`;
    b = `0x${h[3]}${h[3]}`;
  } else if (h.length === 7) {
    r = `0x${h[1]}${h[2]}`;
    g = `0x${h[3]}${h[4]}`;
    b = `0x${h[5]}${h[6]}`;
  }
  return `${+r},${+g},${+b}`;
};

export const formatValue = (value) =>
  Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    maximumSignificantDigits: 3,
    notation: 'compact',
  }).format(value);
export const getUserToken = () => {
  try {
    // Retrieve the token data from localStorage using the key "persist:root"
    const tokenDataString = localStorage.getItem('persist:root');

    // Parse the token data JSON string to an object
    const tokenData = JSON.parse(tokenDataString);
    const auth = JSON.parse(tokenData.auth);

    // Return the accessToken
    return auth.auth.data.accessToken;
  } catch (error) {
    console.error('Error retrieving access token from localStorage:', error);
    // Handle missing or invalid token gracefully (e.g., redirect to login)
    return null; // Or throw an appropriate error
  }
};
export const getUserId = () => {
  try {
    // Retrieve the token data from localStorage using the key "persist:root"
    const tokenDataString = localStorage.getItem('persist:root');

    // Parse the token data JSON string to an object
    const tokenData = JSON.parse(tokenDataString);
    const auth = JSON.parse(tokenData.auth);

    // Return the accessToken
    const { _id } = auth.auth.data.user;
    return _id;
  } catch (error) {
    console.error('Error retrieving access token from localStorage:', error);
    // Handle missing or invalid token gracefully (e.g., redirect to login)
    return null; // Or throw an appropriate error
  }
};
