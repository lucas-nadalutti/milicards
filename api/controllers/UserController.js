/**
 * UserController
 *
 * @description :: Server-side logic for managing users
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    room: function(req, res) {
        res.view({room: req.param('room')});
    },

    enterRoom: function(req, res) {
        var io = sails.sockets;

        if (req.isSocket) {
            // Unsubscribe socket from all previous rooms
            var rooms = io.socketRooms(req.socket);
            _.each(rooms, function(room) {
                io.leave(req.socket, room);
            });
            io.join(req.socket, req.param('room'));

            res.send(getBoard());
        }
    },

    roomsList: function(req, res) {
        res.view();
    },

    play: function(req, res) {
        var io = sails.sockets;

        io.broadcast(req.param('room'), 'cardChosen', getBoard());
    }
	
};


function getCardDefinitions(card) {
    var card = sails.cards[card.slug];
    card.abilities = {};
    _.each(card.abilitySlugs, function(abilitySlug) {
        card.abilities[abilitySlug] = sails.abilities[abilitySlug];
    });
    return _.pick(card, 'name', 'abilities');
}


function getUserCards() {
    // TEMP: Mocked
    var cardsFromDb = [
        {slug: 'littleMonster'},
        {slug: 'littleMonster'},
        {slug: 'littleMonster'},
        {slug: 'bigMonster'},
        {slug: 'bigMonster'}
    ];
    var cards = []
    return _.map(cardsFromDb, getCardDefinitions);
}


function getBoard() {
    return {cards: getUserCards()};
}