'use strict';

function trimSpaces(string) {
	return string.split(' ').join('');
}

function qs(selector, parent = document) {
	return parent.querySelector(selector);
}

function qsa(selector, parent = document) {
	return [ ...parent.querySelectorAll(selector) ];
}

function getIndexOfTileByName(tileName) {
	for (let i = 0; i < _allTiles.length; i++) {
		if (_allTiles[i].name == tileName) {
			return i;
		}
	}
}

function getPlayersPos(players) {
	const positions = {};
	players.forEach(player => {
		const playerPosIndex = getIndexOfTileByName(player.currentTile);
		if (!positions[playerPosIndex]) {
			positions[playerPosIndex] = [ player ];
		} else {
			positions[playerPosIndex].push(player);
		}
	});
	return positions;
}

function getIndexOfPlayer(playerObj) {
	let index;
	for (let i = 0; i < currentGameState.players.length; i++) {
		if (currentGameState.players[i].name == playerObj.name) {
			index = i;
		}
	}
	return index;
}