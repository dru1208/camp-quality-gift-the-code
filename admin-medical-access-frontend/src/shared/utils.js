export const generateCamperProfileURL = camperID => (`/camper_profile/${camperID}`)

export const retrieveCamperID = url => (url.slice(16))

export const parseJwt = (token) => {
  try {
    return JSON.parse(atob(token.split('.')[1]));
  } catch (e) {
    return null;
  }
};