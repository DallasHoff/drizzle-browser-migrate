export async function sha256(input: string) {
	const textEncoder = new TextEncoder();
	const uint8 = textEncoder.encode(input);
	const hashBuffer = await crypto.subtle.digest('SHA-256', uint8);
	const hashArray = Array.from(new Uint8Array(hashBuffer));
	const hashHex = hashArray.map((bytes) => bytes.toString(16).padStart(2, '0'));
	return hashHex.join('');
}
