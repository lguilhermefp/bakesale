const apiHost = 'https://bakesaleforgood.com';

export const fetchInitialDeals = async () => {
  try {
    const response = await fetch(apiHost + '/api/deals');
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.error(e);
  }
};

export const fetchDealDetail = async dealId => {
  try {
    const response = await fetch(apiHost + '/api/deals/' + dealId);
    const responseJson = await response.json();
    return responseJson;
  } catch (e) {
    console.error(e);
  }
};
