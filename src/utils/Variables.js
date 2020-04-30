const THIS_SUBDOMAIN = '';
module.exports = {

    //local
    //BASE_URL: 'http://192.168.0.106/ocm/',
    //API_URL: 'http://192.168.0.106/ocm/api/',
    //BASE_URL: 'http://192.168.0.106/owners-corporation-manager/',
    //API_URL: 'http://192.168.0.106/owners-corporation-manager/api/',

    //staging
    BASE_URL: (THIS_SUBDOMAIN !== '') ? 'https://'+THIS_SUBDOMAIN+'.ocmp.com.au/' : 'https://ocmp.com.au/',
    API_URL: (THIS_SUBDOMAIN !== '') ? 'https://'+THIS_SUBDOMAIN+'.ocmp.com.au/api/' : 'https://ocmp.com.au/api/',

    //live
    /*BASE_URL: 'http://moorookyle.com/',
    API_URL: 'http://moorookyle.com/api/',*/

    /*BASE_URL: 'http://test.ocmp.com.au/',
    API_URL: 'http://test.ocmp.com.au/api/',*/

    IS_LOGGED_IN : false,
    USER_ID : '',
    //USER_ID : '248b0640-ac07-11e8-86b1-87a0a4a99eb2',
    USER_NAME : '',
    //USER_NAME : 'Tanvir Gaus',
    USER_EMAIL : '',
    //USER_EMAIL : 'tanvir.gaus@gmail.com',
    USER_TOKEN : '',
    USER_STATUS : '',
    USER_ROLE : '',
    USER_CONTACT_NO : '',

    CATEGORY : '',
    CATEGORIES : [],
    COMPLAINER_NAME : '',
    COMPLAINER_ADDRESS : '',
    PRIMARY_COLOR : '#002366',
    PAGE_TITLE: '',

};
