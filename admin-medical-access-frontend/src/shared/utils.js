export const generateCamperProfileURL = camperID => (`/camper_profile/${camperID}`)

export const retrieveCamperID = url => (url.slice(16))