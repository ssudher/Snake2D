function spawn(character, x , y)
{
	character.moveCharacter(x, y);

	return "Repsawned";
}

function raiseEvent(eventManager, event) {

	eventManager.raise(event);

	return "raised spawn event";
}

function mvplatformMove(mvplatform, dist, dir) {
	if (dir == 1){
		mvplatform.moveX(dist);
	}
	else if (dir == 2) {
		mvplatform.moveY(dist);
    }

	return "mvplatform movement";
}

