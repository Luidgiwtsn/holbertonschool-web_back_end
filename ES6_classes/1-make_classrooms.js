import ClassRoom from './0-classroom.js';

/**
 * Crée et initialise un tableau de salles de classe.
 * @returns {ClassRoom[]} Un tableau contenant 3 objets ClassRoom.
 */
export default function initializeRooms() {
  return [
    new ClassRoom(19),
    new ClassRoom(20),
    new ClassRoom(34)
  ];
}
