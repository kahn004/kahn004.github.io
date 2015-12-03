import { makeFinalScore } from 'alt'

export default function (alt, storage, storeName) {
	var finalStore = makeFinalScore(alt)

	try {
		alt.bootstrap(storage.get(storeName))
	}
	catch (e) {
		console.error('Failed to bootstrap data', e)
	}

	finalStore.listen(() => {
		if (!storage.get('debug')) {
			storage.set(storeName, alt.takeSnapshot())
		}
	})
}