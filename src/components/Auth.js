import qs from 'qs';

const createAuthProvider = ( name, baseUrl, userUrl, redirectUrl, clientId, scope = null ) => {
	const TOKEN_STORAGE_KEY = `${ name }__OAUTH2ACCESSTOKEN`;
	const REQUEST_TOKEN_STORAGE_KEY = `${ name }__REQUESTOAUTH2ACCESSTOKEN`;
    console.log("testing accessToken")

	let accessToken = null;
	const init = () => {
		// Extract any token from url or localstorage
		accessToken = localStorage.getItem( TOKEN_STORAGE_KEY );
		if ( accessToken ) {
            console.log("testing accessToken")
			return;
		}
		const url = window.location.toString();
		const index = url.indexOf( '#access_token' );
		if ( index === -1 ) {
            console.log("testing index === -1")
			return;
		}
		const hash = url.slice( index + 1 );
		const queryParams = qs.parse( hash );
		const token = queryParams.access_token;

		// This ensures we're requesting the current access token (not another oauth2 provider)
		if ( localStorage.getItem( REQUEST_TOKEN_STORAGE_KEY ) ) {
			localStorage.removeItem( REQUEST_TOKEN_STORAGE_KEY );
			localStorage.setItem( TOKEN_STORAGE_KEY, token );
			window.location = window.location.pathname;
		}

        console.log("testing accessToken")
	};

const logout = () => {
    localStorage.removeItem( TOKEN_STORAGE_KEY );
    accessToken = false;
};

export const login = function() {
    localStorage.setItem( REQUEST_TOKEN_STORAGE_KEY, '1' );
    window.location = `${ baseUrl }/authorize?` +
        `client_id=${ encodeURIComponent( clientId ) }&response_type=token` +
        ( scope ? `&scope=${ scope }` : '' ) +
        `&redirect_uri=${ redirectUrl }`;
};
}