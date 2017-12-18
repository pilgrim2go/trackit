import { call } from './../misc.js';

export const getCosts = (token, begin, end, filters, accounts=undefined) => {
  let route = `/costs?begin=${begin}&end=${end}&by=${filters.join(',')}`;
  if (accounts)
    route += `&accounts=${accounts.join(',')}`;
  return call(route, 'GET', null, token);
};
