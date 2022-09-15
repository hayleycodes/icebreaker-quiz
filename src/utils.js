import { people, avatars } from "./settings";

const allocateAvatars = () => {
  let avatarCopy = [...avatars];

  let characters = {};

  people.forEach((person) => {
    let avatar = avatarCopy.splice(
      Math.floor(Math.random() * avatarCopy.length),
      1
    );
    characters[person] = avatar[0];
  });
  return characters;
};

export const allocatedAvatars = allocateAvatars();
