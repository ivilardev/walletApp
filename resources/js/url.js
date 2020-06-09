let url = 'https://ivilardev-walletapp.herokuapp.com';

if (location.hostname === 'localhost' || location.hostname === '127.0.0.1') {
  url = 'http://127.0.0.1:8000';
}

export default url;
