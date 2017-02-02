handlers.getPlayerEntities = function (args, context) {
    log.info("Getting entity data for " + currentPlayerId);
    log.info("test change!");
    return { message: "You are player " + currentPlayerId };
};
