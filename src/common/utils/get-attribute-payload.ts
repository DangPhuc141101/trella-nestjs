export const getAttributePayload = function (payload) {
  // const localhost = 'http://localhost:3000/';
  const keys = Object.keys(payload);
  for (const key of keys) {
    const attr = key.substring(key.lastIndexOf('/') + 1);
    if (attr) {
      payload[attr] = payload[key];
    }
  }
  return payload;
};
