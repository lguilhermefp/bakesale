const apiHost = 'https://bakesaleforgood.com';

export const fetchInitialDeals = async () => {
  try {
    let response = await fetch(apiHost + '/api/deals');
    let responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.error(e);
  }
};
