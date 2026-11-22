/**
 * Piped API's playlist Endpoint
 */
const endpoint = 'https://pipedapi.kavin.rocks/playlists/';

/**
 * "OMORI Animatics" playlist ID
 */
const playlist = 'PLN0RqFX2ugKWd5zj3s7uobPsqNIpbxgfD';

export interface Animatic {
	uploaderName: string;
	uploadedDate: string;
	thumbnail: string;
	title: string;
	url: string;
}

/**
 * Request to Piped for playlist data
 */
async function fetchPlaylist(source: string): Promise<Animatic[]> {
	const response = await fetch(source);
	if (!response.ok) {
		throw new Error(`Piped API returned ${response.status}`);
	}
	const rawData: { relatedStreams: Animatic[] } = await response.json();

	return rawData.relatedStreams;
}

export default fetchPlaylist(endpoint + playlist);
